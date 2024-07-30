import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
// import './PayoutGraph.css';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const PayoutGraph = () => {
    const data = {
        labels: Array(30).fill(''), // 30 days
        datasets: [
            {
                label: 'Payout Volume',
                data: [0, 236695, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // example data
                borderColor: '#3A9FF5',
                borderWidth: 2,
                fill: false,
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        elements: {
            point: {
                radius: 0,
            },
        },
    };

    return (
        <div className="payout-graph-container">
            <div className="payout-volume">
                <p>Payout volume - last 30 days</p>
                <h2>₹ 2,36,695.00</h2>
            </div>
            {/* <Line data={data} options={options} /> */}
            <div className="graph-wrapper">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default PayoutGraph;
