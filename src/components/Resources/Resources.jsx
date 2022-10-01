//import react
import React from "react";

//import styles
import './Resources.css';

//import img
import sismo from './img/sismo.png'
import moon from './img/moon.png'
import code from './img/code.png'
import nasaResources from './img/nasaResources.png'
import map from './img/map.png'

function Resources (){
    return(
        <div className="resources">

            <div className="block1">
                <div className="blockParagraph">
                    <h1>The Challenge</h1>
                    <p>When they explored the Moon, NASA’s Apollo astronauts left behind several instruments to collect geophysical data near each Apollo landing site. Your challenge is to develop an app that plots the seismic data these instruments transmitted back to Earth on an interactive 3-D globe.</p>
                </div>
                <img id="flaticonImg" src={sismo} alt="" />
            </div>

            <div className="block5">
                <img src={map} alt="" />
                <div className="blockParagraph">
                    <h1>Our solution</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <input id="resourcesButton" type="button" value="More info" />
                </div>
            </div>

            <div className="block4">
                <div className="blockParagraph">
                    <h1>NASA data</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <a href="https://linktr.ee/spaceagencydata" target="_blank" rel="noopener noreferrer"><input id="resourcesButton" type="button" value="NASA data tree" /></a>
                </div>
                <img src={nasaResources} alt="" />
            </div>
            
            <div className="block2">
                <img src={moon} alt="" />
                <div className="blockParagraph">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <input id="resourcesButton" type="button" value="View our 3d model" />
                </div>
            </div>

            <div className="block3">
                <div className="blockParagraph">
                    <h1>Code</h1>
                    <p id="blockParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="buttons">
                        <a href="https://github.com/unnamedNasaSpaceApps/Moonquake-web" target="_blank" rel="noopener noreferrer"><input id="resourcesButton" type="button" value="Web code" /></a>
                        <a href="https://github.com/unnamedNasaSpaceApps/Moonquake-Map" target="_blank" rel="noopener noreferrer"><input id="resourcesButton" type="button" value="Sim code" /></a>
                    </div>
                </div>
                <img id="flaticonImg" src={code} alt="" />
            </div>

        </div>
    );
}

export {Resources};