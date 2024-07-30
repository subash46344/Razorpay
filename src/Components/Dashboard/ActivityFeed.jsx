import React from 'react';
import { FaUser, FaMoneyBillWave, FaExclamationTriangle } from 'react-icons/fa';
import './ActivityFeedStyle.css';

const ActivityFeed = () => {
    const activities = [
        { date: '23 JUL', day: 'Tuesday', icon: <FaUser />, description: '1 contact created' },
        { date: '9 JUL', day: 'Tuesday', icon: <FaMoneyBillWave />, description: '₹ 300.00 credited into the account' },
        { date: '1 JUL', day: 'Monday', icon: <FaMoneyBillWave />, description: '1 payout worth ₹ 2,36,695.00 created' },
        { date: '24 JUN', day: 'Monday', icon: <FaMoneyBillWave />, description: '₹ 300.00 credited into the account' },
    ];

    return (
        <div className="activity-feed">
            <div className="header">
            <div style={{display:"flex"}}>
                <h3>Activity Feed</h3>
                <p style={{margin:"25px 25px 0px"}}><FaExclamationTriangle className="error-icon" />updated a few seconds ago</p>
                </div>
                <span className="filters">Show filters ↓</span>
            </div>
            <div className='active_card_main_block'>
                <div className='active_card_main_block_sub'>
                {activities.map((activity, index) => (
                    <div 
                    key={index}className='active_card_main_block_sub_card_block_main'>
                        <div className='card_active'>
                            <div className='content'>
                                <h4 style={{margin:"10px 5px 2px"}}>{activity.date}</h4>
                                <p style={{margin:"5px 5px 10px"}}>{activity.day}</p>
                            </div>
                            <p style={{border:"1px solid dimgray"}}></p>
                            <div className='icon_c'>
                                <p>{activity.icon}</p>
                            </div>
                        </div>
                        <div className='des_card_active'>
                        <p>{activity.description}</p>
                        </div>

                    </div>
                       ))}
                       <div className='active_Card_btn'>
                       <button className="load-more">LOOK FOR OLDER ACTIVITIES ↓</button>
                       </div>
                </div>
                
            </div>
        </div>
    );
};

export default ActivityFeed;
