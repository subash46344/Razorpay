import React from "react";
import './AmazonSettlementsStyle.css'

const AmazonSettlements = () => {
  const content = [
    {
      heading: "Amazon Instant Settlements",
      p_heading: "Let's get you started",
      p_paragraph: "Complete your application and get instant access to your Amazon payouts",
      button: ["Apply Now"],
    },
    {
      heading: "Creating payouts in Live mode",
      check_add_blancing: "Add balance to create payouts in Live mode",
      p_heading: "Create payout",
      p_paragraph: "There are multiple ways in which you can create the first payouts:",
      button: ["MAKE A PAYOUT", "SHOW APPS FOR ME", "API PAYOUTS"],
    },
  ];

  return (
    <>
      {content.map((item, index) => (
        <section className="content_main_block" key={index}>
          {/* Block Left */}
          <div className="content_main_block_left_block">
            <h1>{item.p_heading}</h1>
          </div>
          {/* Block Right */}
          <div className="content_main_block_right_block">
            {item.check_add_blancing && (
              <div className="blancing">
                <input type="checkbox" />
                <h6>{item.check_add_blancing}</h6>
              </div>
            )}
            {/* Heading */}
            <div className="right_block_heading">
              <input type="radio" />
              <div className="inner_content">
                <h4>{item.heading}</h4>
                <p>{item.p_paragraph}</p>
                {/* Button Block */}
                <div>
                  {item.button.map((btnText, btnIndex) => (
                    <button key={btnIndex}>{btnText}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default AmazonSettlements;
