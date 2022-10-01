//import react
import React from "react";

//import styles
import './Moonquakes.css';

//import router libraly
/*import {Link} from "react-router-dom";*/

function Moonquakes (){
    return(
        <div className="Moonquakes">
            <div className="apollo11Block">
                <div className="titleBox"><h1>Apollo 11</h1></div>
                <div className="table">
                    <ul>
                        <li className="subTable">Station</li>
                        <li className="subTable">Latitude</li>
                        <li className="subTable">Longitude</li>
                        <li className="subTable">Scale</li>
                        <li className="subTable">ScaleFreq</li>
                        <li className="subTable">StartTime</li>
                        <li className="subTable">EndTime</li>
                    </ul>
                </div>
            </div>
            <div className="apollo12Block">
                <h1>Apollo 12</h1>
                <div className="table">
                    <ul>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                    </ul>
                </div>
            </div>
            <div className="apollo14Block">
                <h1>Apollo 14</h1>
                <div className="table">
                    <ul>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                    </ul>
                </div>
            </div>
            <div className="apollo15Block">
                <h1>Apollo 15</h1>
                <div className="table">
                    <ul>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                    </ul>
                </div>
            </div>
            <div className="apollo16Block">
                <h1>Apollo 16</h1>
                <div className="table">
                    <ul>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                        <li className="subTable"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export {Moonquakes};