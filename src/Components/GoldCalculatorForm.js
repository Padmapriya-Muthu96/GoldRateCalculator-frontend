import React from "react";
import axios from "axios";
import Currency from "./Currency";

const GoldCalculatorForm = ({ setResults }) => {

  
  const handleCalculate = async (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById("gold-calculator-form"));

    let data = {
      quantity: formData.get("quantity"),
      unit: formData.get("unit"),
      karat: formData.get("karat"),
      country: formData.get("country"),
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/calculate-gold-rate`, data);
      console.log(res);
      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="gold-calculator-form" className="calculator-form">
      <h2 className="form-title">Gold Price Calculator</h2>

      <div className="form-group">
        <label>
           Quantity of Gold:
        </label>
        <div className="input-group">
          <input type="number" name="quantity" placeholder="Enter quantity" />
          <select name="unit">
            <option>Gram</option>
            <option>Ounce</option>
            <option>Kg</option>
            <option>Penny</option>
            <option>Grain</option>
            <option>Pound</option>
            <option>Baht</option>
            <option>Tola</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>
           Karat & Purity:
        </label>
        <select name="karat">
          {[...Array(19)].map((_, i) => (
            <option key={i}>{24 - i}k</option>
          ))}
        </select>
      </div>

      <Currency />

      <div className="button-container">
        <button onClick={handleCalculate}>Calculate</button>

        
      </div>
    </form>

    
  );
};

export default GoldCalculatorForm;
