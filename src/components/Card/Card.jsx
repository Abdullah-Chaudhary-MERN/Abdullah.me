import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <div style={{ marginTop: '20px' }}>
        <span>{detail}</span>
      </div>
    </div>
  );
};

export default Card;
