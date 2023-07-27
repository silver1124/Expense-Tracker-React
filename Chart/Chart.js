import './Chart.css';
import ChartBar from './ChartBar';
import React from 'react';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
    <div className='chart'>
        {props.dataPoints.map(dataPoints => 
        <ChartBar  key = {dataPoints.label} value = {dataPoints.value} 
        maxvalue = {totalMaximum} label = {dataPoints.label}/>)}
    </div>)
};

export default Chart;