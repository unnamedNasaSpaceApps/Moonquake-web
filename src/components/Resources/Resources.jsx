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
                    <p>A tool was developed to visualize moonquakes in three dimensions in order to facilitate their observation in a more interactive way. The map extracts the information from a NASA database provided by IRIS and is then projected onto a three-dimensional model of the Moon and arranged chronologically on a timeline. Among other things, this tool offers a more intuitive and interactive way to visualize the seismic phenomena occurring on our satellite, so that any individual - regardless of their knowledge or age - will be able to interpret the information.</p>
                    <a href="https://2022.spaceappschallenge.org/challenges/2022-challenges/moonquake-map/teams/unnamed-2/project" target="_blank" rel="noopener noreferrer"><input id="resourcesButton" type="button" value="More info" /></a>
                </div>
            </div>

            <div className="block4">
                <div className="blockParagraph">
                    <h1>Space Agencies Data</h1>
                    <p>For our project, we have used information from space agencies, without them we would not have achieved this result. In the following link you can access to the different sources used.</p>
                    <a href="https://linktr.ee/spaceagencydata" target="_blank" rel="noopener noreferrer"><input id="resourcesButton" type="button" value="NASA data tree" /></a>
                </div>
                <img src={nasaResources} alt="" />
            </div>
            
            <div className="block2">
                <img src={moon} alt="" />
                <div className="blockParagraph">
                    <h1>3D MODEL</h1>
                    <p>Our tool consists of a map that allows the graphical and chronological visualization of the moonquake data obtained by the lunar seismometers placed by NASA through a 3D model of the Moon.</p>
                    <a href="https://skfb.ly/oyEJE" target="_blank" rel="noopener noreferrer"><input id="resourcesButton" type="button" value="View our 3d model" /></a>
                </div>
            </div>

            <div className="block3">
                <div className="blockParagraph">
                    <h1>Code</h1>
                    <p id="blockParagraph">To make our solution to this challenge even more tangible, we made use of the code. Where we had to develop the interactive map using C# and a web page in charge of the promotion of the simulator where we used the javascript library React. In the following links you can see the code uploaded in a public repository.</p>
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