import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavbarComp from "./components/navbar";
import Home from './pages/home';
import ChartTableHourlyEvents from './pages/chart-table/chart_table_hourly_events';

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
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/chart_table/hourly_events">
              <ChartTableHourlyEvents />
            </Route>
          </Switch>
        </div>
        
      </Router>
  );
}

export default App;
