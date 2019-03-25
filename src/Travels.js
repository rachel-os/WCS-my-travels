import React from "react";
import Travel from "./Travel";

const travels = [
  {
    destination:"Kerala",
    country:"India",
    image:"https://res.cloudinary.com/grainderiz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1553260642/travels/yasasi-rajapakse-1215159-unsplash.jpg",
    distance:"8446 km"
  },
  {
    destination:"Wahiba Sands",
    country:"Oman",
    image:"https://res.cloudinary.com/grainderiz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1553260644/travels/giorgio-parravicini-135244-unsplash.jpg",
    distance:"5850 km"
  },
  {
    destination:"Thingvellir Parc",
    country:"Iceland",
    image:"https://res.cloudinary.com/grainderiz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1553260653/travels/nicolas-j-leclercq-715306-unsplash.jpg",
    distance:"2236 km"
  },
  {
    destination:"Lisboa",
    country:"Portugal",
    image:"https://res.cloudinary.com/grainderiz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1553260636/travels/pixpoetry-661151-unsplash.jpg",
    distance:"1150 km"
  },
  {
    destination:"Ko Yao Noi",
    country:"Thailand",
    image:"https://res.cloudinary.com/grainderiz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1553261829/travels/robin-noguier-572033-unsplash.jpg",
    distance:"10102 km"
  }
];

const Travels = () => (
  <div>
    {travels.map(quote => (
        <Travel destination={quote.destination} country={quote.country} image={quote.image} distance={quote.distance} />
    ))}
  </div>
);

export default Travels;