import React, { Fragment } from 'react';
import './App.css';

// Components

import ShowTables from "./components/ShowTables";

import ChartsTest from "./components/ChartsTest";


function App() {
  return (
   <Fragment>
	<div className="container">
		<ChartsTest />
    <ShowTables />
    </div>	
   </Fragment>
  );
}

export default App;
