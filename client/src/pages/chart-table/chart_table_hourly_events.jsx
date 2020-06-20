import React, { Fragment } from 'react';
import ChartHourlyEventsComp from '../../components/charts/GetChartHourlyEvents.js';
import TableHourlyEvents from '../../components/tables/GetTableHourlyEvents.js';

export default function ChartTableHourlyEvents() {
    return (
        <Fragment>
            <h2 className="text-center mt-5">Hourly Events</h2>
            <ChartHourlyEventsComp />
            <div className="mt-5"/>
            <TableHourlyEvents />
        </Fragment>
    )
}
