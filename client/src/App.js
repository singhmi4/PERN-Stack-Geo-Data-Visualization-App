import React, { Fragment } from 'react';
import './App.css';

// Components

import ShowTables from "./components/ShowTables";

function App() {
  return (
   <Fragment>
	<div className="container">
		<ShowTables />
    </div>	
   </Fragment>
  );
}

export default App;
