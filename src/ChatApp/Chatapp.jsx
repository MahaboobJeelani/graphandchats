import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const year = [
    { amount: 560, month: "jan, 2022" },
    { amount: 220, month: "feb, 2022" },
    { amount: 444, month: "mar, 2022" },
    { amount: 100, month: "apl, 2022" },
    { amount: 300, month: "may, 2022" },
    { amount: 220, month: "jun, 2022" },
    { amount: 662, month: "july, 2022" },
    { amount: 784, month: "agu, 2022" },
    { amount: 1000, month: "oct, 2022" },
    { amount: 823, month: "nov, 2022" },
    { amount: 411, month: "dec, 2022" },
];
const LineChart = () => {

    const values = year.map(years => years.amount)
    const labels = year.map(mon => mon.month)

    const chartData = {
        type: "pie",
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [500, 120, 544, 300, 500, 120, 562, 684, 900, 1023, 511],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.7)',
            },
            {
                label: 'Dataset 2',
                data: values,
                fill: false,
                borderColor: 'rgba(65, 92, 292, 0.7)',
                backgroundColor: 'rgba(65, 92, 292, 0.4)',
            }
        ],
    };

    return (
        <div >
            <h2>Line Chart</h2>
            <Line data={chartData} />
            <Bar data={chartData} />
        </div >
    );
};

export default LineChart;
