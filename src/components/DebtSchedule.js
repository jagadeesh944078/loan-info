// src/components/DebtSchedule.js

import React from "react";

const DebtSchedule = ({ debtSchedule }) => {
  return (
    <div className="debt-schedule-container">
      <div className="debt-schedule-header">
        <h2>Debt Schedule</h2>
        <div className="interest-rate-buttons">
          <span>
            Average Annualized Interest Rate: <strong>2.25%</strong>
          </span>
          <button className="toggle-button">Annual</button>
          <button className="toggle-button">Monthly</button>
          <button className="download-button">⬇</button>
          <button className="share-button">🔗</button>
        </div>
      </div>
      <table className="debt-schedule-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Date</th>
            <th>Monthly Payment</th>
            <th>Interest</th>
            <th>Principal Pay Down</th>
            <th>Ending Principal</th>
            <th>Cumulative Interest</th>
          </tr>
        </thead>
        <tbody>
          {debtSchedule.map((row, index) => (
            <tr key={index}>
              <td>{row.month}</td>
              <td>{row.date}</td>
              <td>{row.monthlyPayment}</td>
              <td>{row.interest}</td>
              <td>{row.principalPayDown}</td>
              <td>{row.endingPrincipal}</td>
              <td>{row.cumulativeInterest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DebtSchedule;
