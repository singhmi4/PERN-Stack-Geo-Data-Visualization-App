import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavbarComp from "./components/navbar";
import Home from './pages/home';

// Components

// import ShowTables from "./components/ShowTables";
// import ChartsTest from "./components/ChartsTest";
// import ShowGeoData from './components/GeoData';

{/* <Fragment>
<div className="container">
  <ChartsTest />
  <ShowTables />
  <ShowGeoData />
  </div>	
 </Fragment> */}




function App() {
  return (
      <Router>
        <NavbarComp />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
