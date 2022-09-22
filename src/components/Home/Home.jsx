//import react
import React from "react";

//import styles
import './Home.css';

//import img
import backgroundHome from './img/background.png';

function Home (){
    return(
        <div className="home">
            <h1 className="homeTitle">Moonquake.</h1>
            <img id="backgroundHome" src={backgroundHome} alt="" />            
        </div>
    );
}

export {Home};