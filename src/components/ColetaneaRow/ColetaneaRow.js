import React,{ useRef } from "react";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom';
import bond from "../../image/007s.jpg";
import back from "../../image/devoltaprofuturo.jpg";
import starwars from "../../image/starwars.jpg"
import carros from "../../image/carros.jpg"
import marvel from "../../image/marvel.jpg"
import homemaranha from "../../image/homemaranha.jpg"
import batman from "../../image/batman.jpg"
import crepusculo from "../../image/crepusculo.jpg"
import harrypotter from "../../image/harrypotter.jpg"
import indianajones from "../../image/indianajones.jpg"
import tarzan from "../../image/tarzan.jpg"
import tolkien from "../../image/tolkien.jpg"
import godfather from "../../image/opoderosochefao.jpg"
import matrix from "../../image/matrix.jpg"
import tropadeelite from "../../image/tropadeelite.jpg"
import toystory from "../../image/toystory.jpg"
import madmax from "../../image/madmax.jpg"
import bladerunner from "../../image/bladerunner.jpg"
import stitch from "../../image/liloestitch.jpg"
import jurassic from "../../image/jurassicpark.jpg"

function ColetaneaRow(props) {

  const ref = useRef(null);
  const history = useHistory();
   
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
  function goToBond(){ history.push("/bond")}
  function goToStarWars(){ history.push("/starwars")}
  function goToIndianaJones(){ history.push("/indianajones")}
  function goToHomemAranha(){ history.push("/homemaranha")}
  function goToMarvel(){ history.push("/marvel")}
  function goToBatman(){ history.push("/batman")}
  function goToBacktotheFuture(){ history.push("/devoltaparaofuturo")}
  function goToCarros(){ history.push("/carros")}
  function goToToyStory(){ history.push("/toystory")}
  function goToTarzan(){ history.push("/tarzan")}
  function goToStitch(){ history.push("/stitch")}
  function goToHarryPotter(){ history.push("/harrypotter")}
  function goToCrepusculo(){ history.push("/crepusculo")}
  function goToTolkien(){ history.push("/tolkien")}
  function goToGodfather(){ history.push("/poderosochefao")}
  function goToMatrix(){ history.push("/matrix")}
  function goToTropadeElite(){ history.push("/tropadeelite")}
  function goToMadMax(){ history.push("/madmax")}
  function goToBladeRunner(){ history.push("/bladerunner")}
  function goToJurassic(){ history.push("/jurassic")}

  return (
    <div className="row">
      <h2>Coletâneas</h2>
      
      <div className="row__posters" ref={ref}>
          <img
            className="row__poster row__posterLarge"
            src={bond}
            alt="Coletânea 007"
            onClick={goToBond}
          /> 
          <img
            className="row__poster row__posterLarge"
            src={starwars}
            alt="Coletânea Star Wars"
            onClick={goToStarWars}
          />
          <img
            className="row__poster row__posterLarge"
            src={indianajones}
            alt="Coletânea Indiana Jones"
            onClick={goToIndianaJones}
          />
          <img
            className="row__poster row__posterLarge"
            src={homemaranha}
            alt="Coletânea Homem-Aranha"
            onClick={goToHomemAranha}
          />
          <img
            className="row__poster row__posterLarge"
            src={marvel}
            alt="Coletânea Marvel"
            onClick={goToMarvel}
          />
          <img
            className="row__poster row__posterLarge"
            src={batman}
            alt="Coletânea Batman"
            onClick={goToBatman}
          />
          <img
            className="row__poster row__posterLarge"
            src={back}
            alt="Coletânea De Volta para o Futuro"
            onClick={goToBacktotheFuture}
          />
          <img
            className="row__poster row__posterLarge"
            src={carros}
            alt="Coletânea Carros"
            onClick={goToCarros}
          />
          <img
            className="row__poster row__posterLarge"
            src={toystory}
            alt="Coletânea Toy Story"
            onClick={goToToyStory}
          />
           <img
            className="row__poster row__posterLarge"
            src={tarzan}
            alt="Coletânea Tarzan"
            onClick={goToTarzan}
          />
           <img
            className="row__poster row__posterLarge"
            src={stitch}
            alt="Coletânea Lilo e Stitch"
            onClick={goToStitch}
          />
           <img
            className="row__poster row__posterLarge"
            src={harrypotter}
            alt="Coletânea Harry Potter"
            onClick={goToHarryPotter}
          />
          <img
            className="row__poster row__posterLarge"
            src={crepusculo}
            alt="Coletânea Crepúsculo"
            onClick={goToCrepusculo}
          />
          <img
            className="row__poster row__posterLarge"
            src={tolkien}
            alt="Coletânea Aventuras da Terra Média"
            onClick={goToTolkien}
          />
          <img
            className="row__poster row__posterLarge"
            src={godfather}
            alt="Coletânea Poderoso Chefão"
            onClick={goToGodfather}
          />
          <img
            className="row__poster row__posterLarge"
            src={matrix}
            alt="Coletânea Matrix"
            onClick={goToMatrix}
          />
          <img
            className="row__poster row__posterLarge"
            src={tropadeelite}
            alt="Coletânea Tropa de Elite"
            onClick={goToTropadeElite}
          />
          <img
            className="row__poster row__posterLarge"
            src={madmax}
            alt="Coletânea Mad Max"
            onClick={goToMadMax}
          />
          <img
            className="row__poster row__posterLarge"
            src={bladerunner}
            alt="Coletânea Blade Runner"
            onClick={goToBladeRunner}
          />
           <img
            className="row__poster row__posterLarge"
            src={jurassic}
            alt="Coletânea Jurassic Park"
            onClick={goToJurassic}
          />
        <button className="rowButton"><FontAwesomeIcon icon={faChevronLeft} onClick={scrollLeft}/></button>
        <button className="rowButton right"><FontAwesomeIcon icon={faChevronRight} onClick={scrollRight}/></button>
        
      </div>
    </div>
  );
}


export default ColetaneaRow;