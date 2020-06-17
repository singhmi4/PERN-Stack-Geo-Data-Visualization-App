import React, { Fragment } from 'react';
import './App.css';

// Components

import ShowChart from "./components/ShowChart";

function App() {
  return (
   <Fragment>
	<div className="container">
		<ShowChart />
    </div>	
   </Fragment>
  );
}

export default App;
