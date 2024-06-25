// src/App.js

import React, { useEffect, useState } from "react";
import LoanDetails from "./components/LoanDetails";
import InterestDetails from "./components/InterestDetails";
import ChartComponent from "./components/Chart";
import DebtSchedule from "./components/DebtSchedule";
import { fetchMockData } from "./api/mockData";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchMockData();
      setData(result);
    };

    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="app-container">
      <div className="card-container">
        <LoanDetails loanDetails={data.loanDetails} />
        <InterestDetails interestDetails={data.interestDetails} />
      </div>
      <ChartComponent chartData={data.chartData} />
      <DebtSchedule debtSchedule={data.debtSchedule} />
    </div>
  );
};

export default App;
