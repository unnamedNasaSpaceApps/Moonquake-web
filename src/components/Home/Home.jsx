//import react
import React from "react";

//import styles
import './Home.css';

//import img
import backgroundHome from './img/background.png';

function Home (){
    return(
        <div className="home">
            <img id="backgroundHome" src={backgroundHome} alt="" />
            <h1 className="homeTitle">MOONQUAKES</h1>            
        </div>
    );
}

export {Home};