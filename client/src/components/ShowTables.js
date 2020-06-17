import React, { Fragment, useEffect, useState } from "react";
import * as d3 from "d3";

const ShowTables = () => {
	
// 	Methods
	
	const [data, setData] = useState([]);
	
	const getData = async () => {
		try {
			const response = await fetch("https://sandbox-ukmlr.run-us-west2.goorm.io/events/hourly"); // this needs to be updated to localhost
			// const response = await fetch("http://localhost:5555/events/hourly");
      		const jsonData = await response.json();
			
			setData(jsonData);
		} catch (err) {
			console.error(err);
		}
	}
	
	useEffect(() => {
    getData();
  }, []);
	
	console.log(data);
	
	return (
		<Fragment>
			<h1 className="text-center mt-5">Data</h1>
			<table className="table mt-5 text-center">
			<thead>
			  <tr>
				<th>Date</th>
				<th>Hour</th>
				<th>Events</th>
			  </tr>
			</thead>
			<tbody>			  
			  {data.map(data => (
				<tr key={data.data_id}>
				  <td>{data.date}</td>
				  <td>{data.hour}</td>
				  <td>{data.events}</td>
				</tr>
			  ))}
			</tbody>
		  </table>
		</Fragment>
	)
}

export default ShowTables;
