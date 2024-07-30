import React from 'react';
import Graph from './Graph';
import ActivityFeed from './ActivityFeed';
import './DashboardStyle.css';


const Dashboard = () => {
    return (
        <div className="insights">
            <div className="insights-header">
                <h2>Insights</h2>
                <span>Detailed insights →</span>
            </div>
            <div className="payout-volume">
                {/* <p>Payout volume - last 30 days</p>
                <h1>₹ 2,36,695.00</h1>
                <div className="graph">
                    <Graph/>
                </div> */}
                <Graph/>
            </div>
            <ActivityFeed/>
        </div>
    );
};

export default Dashboard;
