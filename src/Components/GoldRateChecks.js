import React, { useState } from 'react';
import axios from 'axios';
import GoldRateForm from './GoldRateForm';
import GoldRateTable from './GoldRateTable';
import 'react-date-picker/dist/DatePicker.css';


const CheckRates = () => {
  const [historyData, setHistoryData] = useState([]);

  const handleFormSubmit = async (startDate, endDate, country) => {
    if (startDate && endDate) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Gold-History`, {
          fromDate: startDate.toISOString().split('T')[0],
          endDate: endDate.toISOString().split('T')[0],
          countrys: country,
        });
        setHistoryData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
  };

  return (
    <div className="check-rates-container">
      <h1 className="check-rates-title">Check Gold Rate Day Wise</h1>
      <p className="check-rates-description">Select start date, end date, and currency to see the gold rate history.</p>
      <mark style={{textAlign:'center'}}>It allows max 5 days per request</mark>
      <GoldRateForm onSubmit={handleFormSubmit} />
      {historyData.length > 0 && <GoldRateTable historyData={historyData} />}
    </div>
  );
};

export default CheckRates;
