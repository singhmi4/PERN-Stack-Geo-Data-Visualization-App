import React, { Fragment } from 'react';
import './App.css';

// Components

import ShowTables from "./components/ShowTables";
import ChartsTest from "./components/ChartsTest";
import ShowGeoData from './components/GeoData';


function App() {
  return (
   <Fragment>
	<div className="container">
		<ChartsTest />
    <ShowTables />
    <ShowGeoData />
    </div>	
   </Fragment>
  );
}

export default App;
