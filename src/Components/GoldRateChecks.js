import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import CurrencySelector from './Currency';

import 'react-date-picker/dist/DatePicker.css';

const CheckRates = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
//   const [selectedCurrency, setSelectedCurrency] = useState(''); 
  const [historyData, setHistoryData] = useState([]);

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

//   const handleCurrencyChange = e => {
//     const newCurrency = e.target.value;
//     setSelectedCurrency(newCurrency);
    
//   };



  const handleSubmit = async e => {
    e.preventDefault();
    if (startDate && endDate) {
      try {
        const formData = new FormData(e.target);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Gold-History`, {
          fromDate: startDate.toISOString().split('T')[0],
          endDate: endDate.toISOString().split('T')[0],
          countrys: formData.get("country"),
        });

        setHistoryData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error sending data to backend:', error.message);
      }
    } else {
      console.log('Please select both start and end dates.');
    }
  };

  return (
    <div >
      <h1 style={{color:"#1a237e", backgroundColor:"#64b5f6"}}>Check Gold Rate Day Wise?</h1>
      <p>If you want to know the Gold Rate for your required dates select start date and end date and currency, then click the submit button. Now you can see the Rates in your required dates.</p>
      <div className='history-box'>
      <form onSubmit={handleSubmit}>
        <div>
            <div className='start-div' style={{marginBottom:"20px"}}>
          <label style={{fontSize:"x-large",margin:"20px"}} ><i style={{color:"yellow", marginRight:"8px"}} class="fa-regular fa-calendar"></i> Start Date:</label>
          <DatePicker
             selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
             placeholderText="Select start date"
          />
        </div>
        </div>
        <div>
            <div className='end-div' style={{marginBottom:"20px"}}>
          <label style={{fontSize:"x-large",margin:"20px"}}><i style={{color:"yellow", marginRight:"8px"}} class="fa-regular fa-calendar"></i> End Date:</label>
          <DatePicker
          
             selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
             placeholderText="Select end date"
          />
          </div>
        </div>
        
        <CurrencySelector/>
        
        <button type="submit" style={{width:"200px", height:"40px", margin:"20px", font:"20px solid", backgroundColor:"#4fc3f7", marginLeft:"25%", marginRight:"30%"}}>Submit</button>
      </form>
      </div>
      {historyData.length > 0 && (
        <table class="table table-striped">
        <thead>
          <tr>
            <th >Date</th>
            <th>Gold Rate (Gram )</th>
            
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => {
                  const parts = item.split(' Gold Rate per Gram is ');
                  const date = parts[0];
                  const rate = parts[1];
                  
                  return (
                    <tr key={index}>
                      <td>{date}</td>
                      <td>{rate}</td>
                    </tr>
                  );
                })}
        </tbody>
      </table>
       
      )}
    </div>
  );
};

export default CheckRates;