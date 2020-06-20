import React, { Fragment, useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ChartsTest = () => {
	
// 	Methods
	
	const [data, setData] = useState([]);
	
	const getData = async () => {
		try {
			// const response = await fetch("https://sandbox-ukmlr.run-us-west2.goorm.io/events/hourly"); // this needs to be updated to localhost
			const response = await fetch("http://localhost:5555/events/hourly_name");
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
			<ResponsiveContainer width={"100%"} height={400} >
				<LineChart data={data} className="mt-5" >
					<Line type="monotone" dataKey="events" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
					<XAxis dataKey="data_id" />
					<YAxis />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</Fragment>
	)
}

export default ChartsTest;