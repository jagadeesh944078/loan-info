// src/components/LoanDetails.js

import React from "react";

const LoanDetails = ({ loanDetails }) => {
  return (
    <div className="loan-details-card">
      <h2>{loanDetails.bank}</h2>
      <div className="loan-details-header">
        <p>{loanDetails.address}</p>
        <button className="contact-info-button">Contact Info</button>
      </div>
      <div className="loan-details-content">
        <div>
          <p>Initial Loan Balance</p>
          <h3>{loanDetails.initialLoanBalance}</h3>
        </div>
        <div>
          <p>Initial Amortization</p>
          <h3>{loanDetails.initialAmortization}</h3>
        </div>
        <div>
          <p>Initial Term</p>
          <h3>{loanDetails.initialTerm}</h3>
        </div>
      </div>
      <div className="loan-details-content">
        <div>
          <p>Remaining Loan Balance</p>
          <h3>{loanDetails.remainingLoanBalance}</h3>
        </div>
        <div>
          <p>Remaining Amortization</p>
          <h3>{loanDetails.remainingAmortization}</h3>
        </div>
        <div>
          <p>Remaining Term</p>
          <h3>{loanDetails.remainingTerm}</h3>
        </div>
      </div>
      <div className="monthly-payment">
        Monthly Payment: {loanDetails.monthlyPayment}
      </div>
    </div>
  );
};

export default LoanDetails;
