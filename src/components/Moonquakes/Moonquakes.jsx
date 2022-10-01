//import react
import React from "react";

//import styles
import './Moonquakes.css';

//import router libraly
import {Link} from "react-router-dom";

function Moonquakes (){
    return(
        <div className="Moonquakes">
            <div className="moonquakeBlock1">
                <h1>Apollo 11</h1>
                <div className="moonquakeParagraph">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>

            <div className="moonquakeBlock2">
                <h1>Apollo 12</h1>
                <div className="moonquakeParagraph">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>  
                </div>
            </div>

            <div className="moonquakeBlock3">
                <h1>Apollo 14</h1>
                <div className="moonquakeParagraph">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>

            <div className="moonquakeBlock4">
                <h1>Apollo 15</h1>
                <div className="moonquakeParagraph">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>

            <div className="moonquakeBlock5">
                <h1>The largest impact (Apollo 16)</h1>
                <div className="moonquakeParagraph">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Link to=""><input id="resourcesButton" type="button" value="more info" /></Link>
                </div>
            </div>
        </div>
    );
}

export {Moonquakes};