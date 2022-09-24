//import react
import React from "react";

//import styles
import './Resources.css';

//import img
import sismo from './img/sismo.png'
import moon from './img/moon.png'
import code from './img/code.png'

function Resources (){
    return(
        <div className="resources">
            <div className="block1">
                <div className="blockParagraph">
                    <p>When they explored the Moon, NASA’s Apollo astronauts left behind several instruments to collect geophysical data near each Apollo landing site. Your challenge is to develop an app that plots the seismic data these instruments transmitted back to Earth on an interactive 3-D globe.</p>
                </div>
                <img id="flaticonImg" src={sismo} alt="" />
            </div>
            <div className="block2">
                <img src={moon} alt="" />
                <div className="blockParagraph">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <input type="button" value="View our 3d model" />
                </div>
            </div>
            <div className="block3">
                <div className="blockParagraph">
                    <p id="blockParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="buttons">
                        <input type="button" value="Web code" />
                        <input type="button" value="Sim code" />
                    </div>
                </div>
                <img id="flaticonImg" src={code} alt="" />
            </div>
        </div>
    );
}

export {Resources};