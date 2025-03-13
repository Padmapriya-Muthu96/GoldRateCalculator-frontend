import React, { useState, useEffect } from 'react';

const CurrencySelector = () => {
   const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState('');

  useEffect(() => {
    fetch('https://api.metalpriceapi.com/v1/symbols?api_key=6a1215c19cbaa16ecc3ce5ecfde3c098')
      .then(response => response.json())
      .then(data => {
        
        const countryCurrencies = data.symbols; 
        const myArray=Object.keys(countryCurrencies);
        
         setCurrencies(myArray);
        
      })
      .catch(error => console.error('Error fetching currencies:', error));
  }, []);


const handleCurrencyChange = e => {
  const newCurrency = e.target.value;
  setSelectedCurrency(newCurrency);
  
};

  return (
    <div className="box-3" style={{margin:"20px"}}>
      <label style={{fontSize:"x-large"}}>Select Currency:</label>
      <select id="currency-types" name='country' style={{width:"200px", height:"40px", margin:"20px"}} value={selectedCurrency} onChange={handleCurrencyChange}>
        
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default CurrencySelector;