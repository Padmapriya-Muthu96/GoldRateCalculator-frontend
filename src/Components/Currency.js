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
        // const mycurrency=Object.values(countryCurrencies);
        // console.log(countryCurrencies);
        // console.log(myArray);
         setCurrencies(myArray);
        //  setSelectedCurrency(mycurrency);
        //  console.log(mycurrency);
      })
      .catch(error => console.error('Error fetching currencies:', error));
  }, []);

//   const handleCurrencyChange = (event) => {
//     setSelectedCurrency(event.target.value);
//   };
const handleCurrencyChange = e => {
  const newCurrency = e.target.value;
  setSelectedCurrency(newCurrency);
  
};

  return (
    <div className="box-3" style={{margin:"20px"}}>
      <label style={{fontSize:"x-large"}}><i style={{color:"yellow", marginRight:"8px"}} class="fa-regular fa-flag"></i>Select Currency:</label>
      <select id="currency-types" name='country' style={{width:"200px", height:"40px", margin:"20px"}} value={selectedCurrency} onChange={handleCurrencyChange}>
        
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      {/* {selectedCurrency && <p>Selected currency: {selectedCurrency}</p>} */}
    </div>
  );
};

export default CurrencySelector;