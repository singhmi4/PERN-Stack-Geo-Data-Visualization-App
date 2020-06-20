import React, { Fragment } from 'react';
import ChartDailyEventsComp from '../../components/charts/GetChartDailyEvents.js';
import TableDailyEvents from '../../components/tables/GetTableDailyEvents.js';

export default function ChartTableHourlyEvents() {
    return (
        <Fragment>
            <h1 className="text-center mt-5">Daily Events</h1>
            <ChartDailyEventsComp />
            <div className="mt-5"/>
            <TableDailyEvents />
        </Fragment>
    )
}
