import React, { Fragment } from 'react';
import ShowGeoData from '../../components/maps/GetGeoData.js';

export default function GeoDataMap() {
    return (
        <Fragment>
            <h1 className="text-center my-5">Geo Data</h1>
            <ShowGeoData />
        </Fragment>
    )
}
