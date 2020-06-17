import React, { Fragment, useEffect, useState } from "react";
import * as d3 from "d3";

const ShowCharts = () => {
	
	const [data, setData] = useState([]);
	
	const getChartData = async () => {
		try {
			const response = await fetch("https://sandbox-ukmlr.run-us-west2.goorm.io/events/hourly"); // this needs to be updated
      		const jsonData = await response.json();
			
			setData(jsonData);
		} catch (err) {
			console.error(err);
		}
	}
	
	useEffect(() => {
    getChartData();
  }, []);
	
	console.log(data);
	
	return (
		<Fragment>
			<h1 className="text-center mt-5">Charts</h1>
			<table class="table mt-5 text-center">
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

export default ShowCharts;
