import React, { useState } from "react";
import GoldCalculatorForm from "./GoldCalculatorForm";
import CheckRates from "./GoldRateChecks";

const MainContent = () => {
  const [results, setResults] = useState("");

  return (
    <div>

<div className="about-page">
        <h1>Gold Price Calculator</h1>
        <p>
          Gold Price Calculator is a tool that estimates the current value of gold based on its weight, purity, quantity, and current market price.
        </p>
      </div>

     
       <div>
       <GoldCalculatorForm setResults={setResults} />
      </div>

      <div className="result-box">
        <p>{results}</p>
      </div> 
      <div className="detail-box">
            <p>Gold price calculator is a tool that estimates the current value of gold based on its weight, purity, and current market price. Here's how it typically works:</p>
            <div><h2 style={{color:"#4a148c"}}><b>Weight:</b></h2><p>You enter the weight of your gold in grams, ounces, tolas or kilograms. This is the amount of gold you have, and it's the first factor that determines its value.</p></div>
            <div><h2 style={{color:"#4a148c"}}><b>Karat & purity:</b></h2><p>You select the purity of your gold in karats or as a percentage. Gold purity is measured on a scale of 0 to 24 karats, with 24 karats being 100% pure gold. Most jewelry and bullion are 14 karats or less. The higher the purity, the more valuable the gold.</p></div>
            <div><h2 style={{color:"#4a148c"}}><b>Currency:</b></h2><p>You select the Currency of Your required country to retrive live rate of gold.</p></div>
            <div><h2 style={{color:"#4a148c"}}><b>Live Market price:</b></h2><p>The calculator then retrieves the current market price of gold. This can be based on different sources such as London Bullion Market Association or New York Mercantile Exchange.</p></div>
            <div><h2 style={{color:"#4a148c"}}><b>Calculation of Gold:</b></h2><p>Using the weight and purity information you provided, the calculator then calculates the total amount of pure gold in your item. This is multiplied by the current market price of gold to give you an estimate of the value of your gold item.</p></div>
            <div><p>** It's important to note that this <b>scrap gold </b> price calculator is only an estimate, and the actual price you receive for your gold may be different based on the buyer, the location, and other market factors.</p></div>
            <div><h2 style={{color:"#4a148c"}}><b>Gold Unit Conversions</b></h2>
            <p>1 <b>ounce (oz)</b> = 31.10 grams (g)</p>
            <p>1 <b>tola </b>= 11.6638 grams (g)</p>
            <p>1 <b>pennyweight (dwt)</b> = 1.5552 grams (g)</p>
            <p>1 <b>grain (gr) </b>= 0.0648 grams (g)</p>
            <p>1 <b>pound (lb) </b>= 453.5924 grams (g)</p>
            <p>1 <b>baht</b> = 15.2441 grams (g)</p>
            
            </div>
            <CheckRates/>
        </div>
     
    </div>
  );
};

export default MainContent;
