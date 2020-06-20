import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavbarComp from "./components/navbar";
import Footer from "./components/footer";
import Home from './pages/home';
import ChartTableHourlyEvents from './pages/chart-table/chart_table_hourly_events';
import ChartTableDailyEvents from './pages/chart-table/chart_table_daily_events';
import ChartTableHourlyStats from './pages/chart-table/chart_table_hourly_stats';
import ChartTableDailyStats from './pages/chart-table/chart_table_daily_stats';

import GeoDataMap from './pages/geo-map/geo_map_stats';

function App() {
  return (
    <Fragment>
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
            <Route exact path="/chart_table/hourly_stats">
              <ChartTableHourlyStats />
            </Route>
            <Route exact path="/chart_table/daily_stats">
              <ChartTableDailyStats />
            </Route>
            <Route exact path="/map">
                <GeoDataMap />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </Fragment>
      
  );
}

export default App;
