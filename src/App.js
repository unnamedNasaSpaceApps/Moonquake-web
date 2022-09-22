//import react
import React from 'react';

//import router libraly
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import NavBar from './components/NavBar/NavBar';
import {Home} from './components/Home/Home';
import {Resources} from './components/Resources/Resources';



const App = () => {
  return (
      <React.Fragment>
      <Router>
       <NavBar/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/resources" exact component={() => <Resources />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;