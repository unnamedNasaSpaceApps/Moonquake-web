//import react
import React, { useState } from 'react';

//import router libraly
import { Link, withRouter } from "react-router-dom";

//import styles
import './NavBar.css';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return(
    <nav className='Navegacion'>
      <div className='BrandOutUlSection'><a href='https://2022.spaceappschallenge.org/challenges/2022-challenges/moonquake-map/teams/unnamed-2/project' className="Brand-OutUl">Unnamed.<sup>Team</sup></a></div>
      <ul className={isNavExpanded ? "topnav responsive" : "topnav"}>
        <div className="Brand"><Link to="/" className="active" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Unnamed.<sup>Team</sup></Link></div>
        <div  iv className="mid">
          <Link to="/" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Home</Link>
          <Link to="/resources" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Resources</Link>
          <Link to="/download" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Download</Link>
          <Link to={{ pathname: "https://veinad.itch.io/moonquake-map-nasaspaceapps-2022" }} target="_blank" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Run Map</Link>
        </div>
        <a href="#!" className="icon" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
          <i className="fa fa-bars"/>
        </a>
      </ul>
    </nav>
  );
}

export default withRouter(NavBar);






