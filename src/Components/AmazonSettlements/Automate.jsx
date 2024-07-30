import React from "react";
import { FaTimes, FaArrowRight } from "react-icons/fa";

function Automate() {
  return (
    <>
      <section className="automation_main_block">
        <div className="automation_banner_block"></div>
        <div className="automation_content_block">
          <h2>Automate Bookkeeping For Payouts</h2>
          <p>
            {" "}
            Close your books 60% faster and with better accuracy by automating Bookkeeping for your Payouts.
          </p>
        </div>
        <div className="automation_btn_block">
            <div className="close_icon">
            <FaTimes color="#fff" />
            </div>
          <button>
            Connect Zoho Books <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default Automate;
