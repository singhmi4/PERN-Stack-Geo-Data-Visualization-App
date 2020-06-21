import React, { Fragment, useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, Label, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ChartHourlyStatsComp = () => {
	
// 	Methods
	
	const [data, setData] = useState([]);
	
	const getData = async () => {
		try {
			const response = await fetch("/stats/hourly_name");
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
            <h2 className="text-center mt-5">Revenue</h2>
			<ResponsiveContainer width={"100%"} height={400} >
				<LineChart data={data} className="mt-5" >
					<Line type="monotone" dataKey="revenue" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
					<XAxis dataKey="hour" >
						<Label value="Hours" offset={0} position="insideBottom" />
					</XAxis>	
					<YAxis domain={[0, 1000]} />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
            <h2 className="text-center mt-5">Impressions</h2>
            <ResponsiveContainer width={"100%"} height={400} >
				<LineChart data={data} className="mt-5" >
					<Line type="monotone" dataKey="impressions" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
					<XAxis dataKey="hour" >
						<Label value="Hours" offset={0} position="insideBottom" />
					</XAxis>	
					<YAxis />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
            <h2 className="text-center mt-5">Clicks</h2>
            <ResponsiveContainer width={"100%"} height={400} >
				<LineChart data={data} className="mt-5" >
					<Line type="monotone" dataKey="clicks" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
					<XAxis dataKey="hour" >
						<Label value="Hours" offset={0} position="insideBottom" />
					</XAxis>	
					<YAxis />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</Fragment>
	)
}

export default ChartHourlyStatsComp;