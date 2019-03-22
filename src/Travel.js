import React from "react";

const Travel = props => (
  <figure>
    <figcaption>
      <h2>{props.destination}</h2>
      <h2>{props.country}</h2>
    </figcaption>
    <img src={props.image} alt={props.destination} />
    <h3>{props.distance}</h3>
  </figure>
);

export default Travel;