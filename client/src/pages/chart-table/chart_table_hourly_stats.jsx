import React, { Fragment } from 'react';
import ChartHourlyStatsComp from '../../components/charts/GetChartHourlyStats.js';
import TableHourlyStats from '../../components/tables/GetTableHourlyStats.js';

export default function ChartTableHourlyStats() {
    return (
        <Fragment>
            <h1 className="text-center mt-5">Hourly Stats</h1>
            <ChartHourlyStatsComp />
            <div className="mt-5"/>
            <TableHourlyStats />
        </Fragment>
    )
}
