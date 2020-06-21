import React, { Fragment, useState, useEffect } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, Label, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ChartHourlyEventsComp = () => {
	
// 	Methods
	
	const [data, setData] = useState([]);
	
	const getData = async () => {
		try {
			const response = await fetch("/events/hourly_name");
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
				<BarChart data={data} className="mt-5" >
					<Tooltip />
					<Bar type="monotone" dataKey="events" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
					<XAxis dataKey="hour" >
						<Label value="Hours" offset={0} position="insideBottom" />
					</XAxis>	
					<YAxis label={{ value: 'Events', angle: -90, position: 'insideLeft' }} />
					
				</BarChart>
			</ResponsiveContainer>
		</Fragment>
	)
}

export default ChartHourlyEventsComp;