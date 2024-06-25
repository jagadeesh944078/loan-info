// src/components/InterestDetails.js

import React from "react";

const InterestDetails = ({ interestDetails }) => {
  return (
    <div className="interest-details-card">
      <h2>Interest Details</h2>
      <div className="interest-details-content">
        <div>
          <p>Interest Rate</p>
          <h3>{interestDetails.interestRate}</h3>
        </div>
        <div>
          <p>Interest Only Period</p>
          <h3>{interestDetails.interestOnlyPeriod}</h3>
        </div>
        <div>
          <p>Rate Type</p>
          <h3>{interestDetails.rateType}</h3>
        </div>
      </div>
      <div className="interest-details-content">
        <div>
          <p>Principal Paydown Start</p>
          <h3>{interestDetails.principalPaydownStart}</h3>
        </div>
        <div>
          <p>Maturation Date</p>
          <h3>{interestDetails.maturationDate}</h3>
        </div>
      </div>
    </div>
  );
};

export default InterestDetails;
