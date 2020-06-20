import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavbarComp from "./components/navbar";
import Home from './pages/home';
import ChartTableHourlyEvents from './pages/chart-table/chart_table_hourly_events';
import ChartTableDailyEvents from './pages/chart-table/chart_table_daily_events';
import GeoDataMap from './pages/geo-map/geo_map_stats';

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
            <Route exact path="/chart_table/daily_events">
              <ChartTableDailyEvents />
            </Route>
            <Route exact path="/map">
              <GeoDataMap />
            </Route>
          </Switch>
        </div>
        
      </Router>
  );
}

export default App;
