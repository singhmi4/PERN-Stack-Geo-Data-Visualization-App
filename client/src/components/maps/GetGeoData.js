import React, { Fragment, useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "../../App.css";

const ShowGeoData = () => {

    const [mapData, setMapData] = useState([]);
	
	const getData = async () => {
		try {
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
    
    const [activeCity, setActiveCity] = React.useState(null);

    return (<Fragment>
        <Map center={[52.146973, -106.647034]} zoom={4} className="mb-5">
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup>
                {mapData.map((city, index) => (
                    <Marker key={city.poi_id} 
                            position={[city.lat, city.lon]}
                            onClick={() => {
                                setActiveCity(city);
                            }}   
                    />
                    ))}
            </MarkerClusterGroup>      

            {activeCity && (
                <Popup
                    position={[activeCity.lat, activeCity.lon]}
                    onClose={() => {
                        setActiveCity(null);
                    }}
                >
                 <div>
                    <h2>{activeCity.name}</h2>
                    <p>Impressions: {activeCity.impressions}</p>
                    <p>Clicks: {activeCity.clicks}</p> 
                    <p>Revenue: $ {activeCity.revenue}</p>      
                </div>   
                </Popup>
            )}

        </Map>
    </Fragment>
    );
}

export default ShowGeoData;