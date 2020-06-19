import React, { Fragment, useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const ChartsTest = () => {
	
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
			<LineChart width={800} height={400} data={data} className="mt-5 mx-auto" >
    			<Line type="monotone" dataKey="events" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
    			<XAxis dataKey="data_id" />
    			<YAxis />
				<Tooltip />
  			</LineChart>
		</Fragment>
	)
}

export default ChartsTest;