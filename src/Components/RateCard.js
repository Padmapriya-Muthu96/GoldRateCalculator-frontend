import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion"; 

const RateCard = () => {
  const [rates, setRates] = useState({
    grams: 0,
    ounces: 0,
    kgs: 0,
    pennys: 0,
    grains: 0,
    pound: 0,
    bahts: 0,
    tolas: 0,
  });

  useEffect(() => {
    fetch(
      "https://api.metalpriceapi.com/v1/latest?api_key=6a1215c19cbaa16ecc3ce5ecfde3c098&base=USD&currencies=XAU"
    )
      .then((response) => response.json())
      .then((data) => {
        const goldOunceRates = 1 / data.rates.XAU;
        const goldGramRates = goldOunceRates / 31.10;
        setRates({
          grams: goldGramRates.toFixed(2),
          ounces: goldOunceRates.toFixed(2),
          kgs: (goldGramRates * 1000).toFixed(2),
          pennys: (goldGramRates * 1.5552).toFixed(2),
          grains: (goldGramRates * 0.0648).toFixed(2),
          pound: (goldGramRates * 453.5924).toFixed(2),
          bahts: (goldGramRates * 15.2441).toFixed(2),
          tolas: (goldGramRates * 11.6638).toFixed(2),
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const cardData = [
    { title: "GRAM", value: rates.grams },
    { title: "OUNCE", value: rates.ounces },
    { title: "KG", value: rates.kgs },
    { title: "PENNY", value: rates.pennys },
    { title: "GRAIN", value: rates.grains },
    { title: "POUND", value: rates.pound },
    { title: "BAHT", value: rates.bahts },
    { title: "TOLA", value: rates.tolas },
  ];

  return (
    <motion.div
      className="rate-card-container"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {cardData.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, rotate: 3 }} 
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="rate-card">
            <Card.Body>
              <Card.Title className="rate-title">{item.title}</Card.Title>
              <Card.Text>Per {item.title}</Card.Text>
              <motion.span
                className="rate-value"
                animate={{ scale: [1, 1.5, 1.5] }} 
                transition={{ duration: 0.9 }}
              >
                {item.value} $
              </motion.span>
            </Card.Body>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default RateCard;