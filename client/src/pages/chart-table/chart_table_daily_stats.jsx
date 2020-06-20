import React, { Fragment } from 'react';
import ChartDailyStatsComp from '../../components/charts/GetChartDailyStats.js';
import TableDailyStats from '../../components/tables/GetTableDailyStats.js';

export default function ChartTableHourlyEvents() {
    return (
        <Fragment>
            <h1 className="text-center mt-5">Daily Stats</h1>
            <ChartDailyStatsComp />
            <div className="mt-5"/>
            <TableDailyStats />
        </Fragment>
    )
}
