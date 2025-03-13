import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import CurrencySelector from './Currency';

const GoldRateForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(startDate, endDate, country);
  };

  return (
    <div className="gold-form-container">
      <form onSubmit={handleSubmit} className="gold-form">
        <div className="gold-input-group">
          <label>📅 Start Date:</label>
          <DatePicker value={startDate} onChange={setStartDate} format="y-MM-dd" className="gold-date-picker" />
        </div>
        <div className="gold-input-group">
          <label>📅 End Date:</label>
          <DatePicker value={endDate} onChange={setEndDate} format="y-MM-dd" className="gold-date-picker" minDate={startDate} />
        </div>
        <CurrencySelector onChange={setCountry} />
        <button type="submit" className="gold-submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default GoldRateForm;
