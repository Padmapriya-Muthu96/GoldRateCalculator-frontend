import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

const RateCard = () => {

    const [ounces, setOunces] = useState([]);
    const [grams, setGrams] = useState([]);
    const [kgs, setKgs] = useState([]);
    const [pennys, setPennys] = useState([]);
    const [grains, setGrains] = useState([]);
    const [pound, setPound] = useState([]);
    const [bahts, setBahts] = useState([]);
    const [tolas, setTolas] = useState([]);

    useEffect(() => {
        fetch('https://api.metalpriceapi.com/v1/latest?api_key=6a1215c19cbaa16ecc3ce5ecfde3c098&base=USD&currencies=XAU')
  
          .then(response => response.json())
          .then(data => {
            
            const goldUnits = data; 
            console.log(goldUnits);

            const goldOunceRates =1/( goldUnits.rates.XAU); // 1 ounce
            setOunces(goldOunceRates.toFixed(2));
            const goldGramRates = goldOunceRates / 31.10; // 1 gram
            setGrams(goldGramRates.toFixed(2));
            const goldKgRates = goldGramRates*1000;  // 1 Kg
            setKgs(goldKgRates.toFixed(2));
            const goldPennyRates = goldGramRates* 1.5552;  // 1 penny
            setPennys(goldPennyRates.toFixed(2));
            const goldGrainRates = goldGramRates*  0.0648;  // 1 grain
            setGrains(goldGrainRates.toFixed(2));
            const goldPounderGrams = goldGramRates* 453.5924;  // 1 pound
            setPound(goldPounderGrams.toFixed(2));
            const goldBahtrGrams = goldGramRates* 15.2441;  // 1 bhat
            setBahts(goldBahtrGrams.toFixed(2));
            const goldTolaGrams = goldGramRates* 11.6638;   // 1 tola
            setTolas(goldTolaGrams.toFixed(2));
          })
          .catch(error => console.error('Error fetching currencies:', error));
      }, []);
  return (
    <div className="rate-card-container" style={{width:"100%", height:"80%", border:"2px solid black", padding:"5px", margin:"10px", marginLeft:"200px"}}>
    <div className="rate-card-1">
      <Card style={{height:"100px", width:"100px", backgroundImage:"url('https://thumbs.dreamstime.com/b/luxury-golden-background-gradient-light-35374074.jpg')", border:"2px solid black", padding:"10px", margin:"20px", marginLeft:"100px", textAlign:"center"}}>
      
      <Card.Body >
        <Card.Title style={{color:"red"}}>GRAM</Card.Title>
        <Card.Text>Per Gram</Card.Text>
        <Card.Text style={{color:"blue", backgroundColor:"#00e676", textAlign:"center"}}>{grams} $</Card.Text>
        
      </Card.Body>
    </Card>
    </div>
     <div className="rate-card-2">
     <Card style={{height:"100px", width:"80px", backgroundImage:"url('https://thumbs.dreamstime.com/b/luxury-golden-background-gradient-light-35374074.jpg')", border:"2px solid black", padding:"10px", margin:"20px", textAlign:"center"}}>
     
     <Card.Body>
       <Card.Title style={{color:"red"}}>OUNCE</Card.Title>
       <Card.Text>Per Ounce</Card.Text>
       <Card.Text style={{color:"blue", backgroundColor:"#00e676", textAlign:"center"}}>{ounces} $</Card.Text>
       
     </Card.Body>
   </Card >
   </div>
    <div className="rate-card-3">
    <Card style={{height:"100px", width:"120px",backgroundImage:"url('https://thumbs.dreamstime.com/b/luxury-golden-background-gradient-light-35374074.jpg')", border:"2px solid black", padding:"10px", margin:"20px", textAlign:"center"}}>
    
    <Card.Body>
      <Card.Title style={{color:"red"}}>KG</Card.Title>
      <Card.Text>Per kG</Card.Text>
      <Card.Text style={{color:"blue", backgroundColor:"#00e676", textAlign:"center"}}>{kgs} $</Card.Text>
      
    </Card.Body>
  </Card >
  </div>
   <div className="rate-card-4">
   <Card style={{height:"100px", width:"80px",backgroundImage:"url('https://thumbs.dreamstime.com/b/luxury-golden-background-gradient-light-35374074.jpg')", border:"2px solid black", padding:"10px", margin:"20px", textAlign:"center"}}>
   
   <Card.Body>
     <Card.Title style={{color:"red"}}>PENNY</Card.Title>
     <Card.Text>Per Penny</Card.Text>
     <Card.Text style={{color:"blue", backgroundColor:"#00e676", textAlign:"center"}}>{pennys} $</Card.Text>
     
   </Card.Body>
 </Card>
 </div>
  <div className="rate-card-5">
  <Card style={{height:"100px", width:"80px", backgroundImage:"url('https://thumbs.dreamstime.com/b/luxury-golden-background-gradient-light-35374074.jpg')", border:"2px solid black", padding:"10px", margin:"20px", textAlign:"center"}}>

  <Card.Body>
    <Card.Title style={{color:"red"}}>GRAIN</Card.Title>
    <Card.Text>Per Grain</Card.Text>
    <Card.Text style={{color:"blue", backgroundColor:"#00e676", textAlign:"center"}}>{grains} $</Card.Text>
    
  </Card.Body>
</Card>
</div>
 <div className="rate-card-6">
 <Card style={{height:"100px", width:"130px", backgroundImage:"url('https://thumbs.dreamstime.com/b/luxury-golden-background-gradient-light-35374074.jpg')", border:"2px solid black", padding:"10px", margin:"20px", textAlign:"center"}}>

 <Card.Body>
   <Card.Title style={{color:"red"}}>POUND</Card.Title>
   <Card.Text>Per Pounds</Card.Text>
   <Card.Text style={{color:"blue", backgroundColor:"#00e676", textAlign:"center"}}>{pound} $</Card.Text>
   
 </Card.Body>
</Card>
</div>
 <div className="rate-card-7">
 <Card style={{height:"100px", width:"80px", backgroundImage:"url('https://thumbs.dreamstime.com/b/luxury-golden-background-gradient-light-35374074.jpg')", border:"2px solid black", padding:"10px", margin:"20px", textAlign:"center"}}>
 
 <Card.Body>
   <Card.Title style={{color:"red"}}>BAHT</Card.Title>
   <Card.Text>Per Baht</Card.Text>
   <Card.Text style={{color:"blue", backgroundColor:"#00e676", textAlign:"center"}}>{bahts} $</Card.Text>
   
 </Card.Body>
</Card>
</div>
 <div className="rate-card-8" >
<Card style={{height:"100px", width:"80px", backgroundImage:"url('https://thumbs.dreamstime.com/b/luxury-golden-background-gradient-light-35374074.jpg')", border:"2px solid black", padding:"10px", margin:"20px", textAlign:"center" }}>

<Card.Body>
  <Card.Title style={{color:"red"}}>TOLA</Card.Title>
  <Card.Text>Per Tola</Card.Text>
  <Card.Text style={{color:"blue", backgroundColor:"#00e676", textAlign:"center"}}>{tolas} $</Card.Text>
  
</Card.Body>
</Card>
</div>

</div>
  );
};

export default RateCard;