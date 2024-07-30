import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./AccountCard.css";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const AccountCard = () => {
  return (
  <>
    <h1 style={{color:"#fff",fontSize:"14px",padding:"10px 0px"}}>Onboarding Updates (1)</h1>
    <div className="account-card">
      <div className="account-card-left">
        <div className="icon-container">
          <AccountBalanceIcon sx={{fontSize:70}}/>
        </div>
        <div className="account-label">CURRENT ACCOUNT</div>
      </div>
      <div className="account-card-right">
        <div className="account-details">
          <h2>Open your RazorpayX account.</h2>
          <p>
            Don't let bankache come in the way of your growth. Apply for your
            RazorpayX account with a few basic details.
          </p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-step" style={{ width: "65%" }}>
              <span style={{ width: "65%", backgroundColor: "green" }}></span>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-step" style={{ width: "25%" }}>
              <span style={{ width: "25%", backgroundColor: "#333"}}></span>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-step" style={{ width: "25%" }}>
              <span style={{ width: "25%", backgroundColor: "#333" }}></span>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-step" style={{ width: "25%" }}>
              <span style={{ width: "25%", backgroundColor: "#333"}}></span>
            </div>
          </div>
          <div className="progress-text">0/4</div>
        </div>
        <button className="start-button">
          Start application <FaArrowRight />
        </button>
      </div>
    </div>
  </>
  );
};

export default AccountCard;
