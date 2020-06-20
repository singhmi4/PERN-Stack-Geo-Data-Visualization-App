import React, { Fragment } from 'react';
import ShowGeoData from '../../components/maps/GetGeoData.js';

export default function GeoDataMap() {
    return (
        <Fragment>
            <h2 className="text-center mt-5">Geo Data</h2>
            <ShowGeoData />
        </Fragment>
    )
}
