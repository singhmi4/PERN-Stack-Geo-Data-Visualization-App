import React, { Fragment, useState, useEffect } from "react";
import { Icon } from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";

const ShowGeoData = () => {

    const [mapData, setMapData] = useState([]);
	
	const getData = async () => {
		try {
			// const response = await fetch("https://sandbox-ukmlr.run-us-west2.goorm.io/events/hourly_name"); // this needs to be updated to localhost
			const response = await fetch("http://localhost:5555/stats/map/daily");
      		const jsonData = await response.json();
			
			setMapData(jsonData);
		} catch (err) {
			console.error(err);
		}
	}
	
	useEffect(() => {
    getData();
  }, []);
	
	console.log(mapData);

    return (<Fragment>
        <Map center={[52.146973, -106.647034]} zoom={4} className="mb-5">
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {mapData.map(data => (
                <Marker key={data.poi_id} 
                        position={[data.lat, data.lon]}
                />
            ))}

        </Map>
    </Fragment>
    );
}

export default ShowGeoData;