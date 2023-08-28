import React, { useState } from "react";
import axios from "axios";
import Currency from "./Currency";
 import RateCard from "./RateCad";
 import CheckRates from "./GoldRateChecks";


const MainContent=()=>{

const [results, setResults]= useState('');
     

    const handleCalculate=async(e)=>{
        e.preventDefault();

        const formData = new FormData(document.getElementById('gold-calculator-form'));
       

        let data={
            quantity: formData.get("quantity"),
            unit: formData.get("unit"),
            karat: formData.get("karat"),
            country: formData.get("country"),
        }

        try{
            const res=await axios.post(`${process.env.REACT_APP_API_URL}/calculate-gold-rate`,data)
            console.log(res);
            setResults(res.data);

           
        }
        catch(error){
            console.log(error);
        }

    }

    return<div className="container-fluid">

<div className="rate-card-container">

    <div className="side-rate" >
    <RateCard/>
</div>
    </div>
        <div className="about-page" >
            <h1 style={{color:"#1a237e",backgroundColor:"#64b5f6"}}>Gold Price Calculator</h1>
        <p>Gold Price Calculator is a tool that estimates the current value of gold based on its weight, purity, quantity and current market price.</p>
        </div>
        <form id="gold-calculator-form">
        <div className="calculator-box">
            <div className="box-1" style={{margin:"20px"}}>
                <label style={{fontSize:"x-large"}}><i style={{color:"yellow", marginRight:"8px"}} class="fa-solid fa-scale-balanced"></i>Quantity of Gold: </label>
                <input type="search" id="amount" placeholder="..1.." name="quantity" style={{width:"200px", height:"40px", textAlign:"center", marginLeft:"9px"}}/>
                <select id="gold-types" name="unit" style={{width:"200px", height:"40px", margin:"20px"}}>
                    <option>Gram</option>
                    <option>ounce</option>
                    <option>Kg</option>
                    <option>Penny</option>
                    <option>Grain</option>
                    <option>Pounder</option>
                    <option>Bahtr</option>
                    <option>Tola</option>

                </select>

            </div>
            <div className="box-2" style={{margin:"20px"}}>
            <label style={{fontSize:"x-large"}}><i style={{color:"yellow", marginRight:"8px"}} class="fa-solid fa-percent"></i>Karat & purity: </label>
            <select id="karat-types" name="karat" style={{width:"200px", height:"40px", margin:"20px"}}>
                <option>24k</option>
                <option>23k</option>
                <option>22k</option>
                <option>21k</option>
                <option>20k</option>
                <option>19k</option>
                <option>18k</option>
                <option>17k</option>
                <option>16k</option>
                <option>15k</option>
                <option>14k</option>
                <option>13k</option>
                <option>12k</option>
                <option>11k</option>
                <option>10k</option>
                <option>9k</option>
                <option>8k</option>
                <option>7k</option>
                <option>6k</option>
                
                
                
            </select>

            </div>
            
            <Currency/>

           <div className="cal-btn" style={{alignItems:"center", marginLeft:"300px", marginRight:"300px"}}> <button onClick={handleCalculate} style={{width:"200px", height:"40px", margin:"20px", font:"20px solid", backgroundColor:"#4fc3f7"}}>Calculate</button></div>

           <br></br>
           <div className="result-box" style={{alignItems:"center" }}><p style={{ color:"blue", fontSize:"x-large", marginLeft:"20%", marginRight:"20%", backgroundColor:"#00e676"}}>{results} </p></div>

          
           


        </div>
        </form>
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
        </div>
        <CheckRates/>
        
        </div>
    
}

export default MainContent;