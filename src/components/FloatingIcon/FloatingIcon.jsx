import React from "react";
import './FloatingIcon.css';

const FloatingIcon = ({ img }) => {
  return (
    <div className="floatingIcon">
      <img src={img} alt="" />
    </div>
  );
};

export default FloatingIcon;
