//import react
import React from "react";

//import styles
import './Footer.css';

//import img
import uruguay from './img/uruguay.png'

const Footer = () =>{
    return(
        <div className="footer">
            <p>Developed by “Unnamed” team in Uruguay for Space Apps Challenge 2022</p>
            <img src={uruguay} alt="" />
        </div>
    );
}

export {Footer};