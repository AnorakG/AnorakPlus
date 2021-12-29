import { firebaseDatabase } from "../../firebase";
import React,{ useEffect, useState} from "react";
import YouTube from "react-youtube";




function ColetaRow(props) {

    
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
      
      <div className="row__coletanea">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className="row__coletaneas row__coletaneasLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}


export default ColetaRow;