//import react
import React from "react";

//import router libraly
import {Link} from "react-router-dom";

//import styles
import './Download.css';

//import img
import DownloadImg from './img/download.png'
import Apple from './img/apple.png';
import Microsoft from './img/microsoft.png';
import Linux from './img/linux.png';

//import simulator
import sim from './simulator/hola.txt'


function Download (){
    return(
        <div className="Download">
            <div className="CenterBox">
                <div className="downloadTitleBox">
                    <h1 id="downloadTitle">Download</h1>
                    <img src={DownloadImg} alt="" />
                </div>
                <div className="Buttons">
                    <Link to={sim} target="_blank" download>
                        <div className="appleButton">
                            <h1>macOS</h1>
                            <img src={Apple} alt="" />
                        </div>
                    </Link>
                    <Link>
                        <div className="microsoftButton">
                            <h1>Windows</h1>
                            <img src={Microsoft} alt="" />
                        </div>
                    </Link>
                    <Link>
                        <div className="linuxButton">
                            <h1>Linux</h1>
                            <img src={Linux} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export {Download};

