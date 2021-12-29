import { firebaseDatabase } from "../../firebase";
import React,{ useEffect, useState, useRef } from "react";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTube from "react-youtube";




function Row(props) {

    const ref = useRef(null);
    const { title, movieType } = props;
    const [movies, setMovies] = useState([]);
    const [ trailerUrl, setTrailerUrl ] = useState("")

    useEffect(() => {
    fetchMovies(movieType);
  }, [movieType]);

  const leafRoot = 'movies';

  const fetchMovies = (movieType) => {
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on("value", (snapshot) => {
    const movies = snapshot.val();
    if (movies && movies.length !== 0) {
      setMovies(() => movies);
    }
  });
  };
  function scrollRight(){
    ref.current.scrollBy({
      top:0,
      left:800,
      behavior:'smooth'
    })
  };
  function scrollLeft(){
    ref.current.scrollBy({
      top:0,
      left:-800,
      behavior:'smooth'
    })
  };
  const opts ={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1
    }
  }
  const handleClick= (movie) => {
    if(trailerUrl){
      setTrailerUrl('')
    }else{
        const urlParams = movie.trailer
        setTrailerUrl(urlParams);
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      
      <div className="row__posters" ref={ref}>
        
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
        <button className="rowButton"><FontAwesomeIcon icon={faChevronLeft} onClick={scrollLeft}/></button>
        <button className="rowButton right"><FontAwesomeIcon icon={faChevronRight} onClick={scrollRight}/></button>
        
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}


export default Row;