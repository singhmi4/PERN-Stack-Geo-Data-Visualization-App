import React, { Fragment, useEffect } from "react";
import * as d3 from "d3";

const ShowCharts = () => {
	
	const getChartData = async () => {
		try {
			const response = await fetch("https://sandbox-ukmlr.run-us-west2.goorm.io/events/hourly");
      		const jsonData = await response.json();
			console.log(jsonData);
		} catch (err) {
			console.error(err);
		}
	}
	
	useEffect(() => {
    getChartData();
  }, []);
	
	return (
		<Fragment>
			<h1 className="text-center mt-5">Charts</h1>
		</Fragment>
	)
}

export default ShowCharts;
