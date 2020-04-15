import React from 'react';

import "./styles.scss";
import UrberEats from "/Users/timgentry/Desktop/Dev/corbetts/src/Images/uber-eats.png";


const UberEats = () => {
    return (
        <div className="uberEatsContainer">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <a href="https://www.ubereats.com/miami/food-delivery/corbetts-sports-bar-and-grill/p17_xWy0RZ2zZjz4Qpl0iw"><h2 className="text-center">Delivery with</h2></a>
                <img className="uberLogo" src={UrberEats} width="100%" alt="Uber Eats Logo"></img>
            </div>
        </div>
    );
}

export default UberEats;