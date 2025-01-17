import React from 'react';
import './style.css';

const CustomButton = ({ label, onClick }) => {
  return (
    <button className="customButton" onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
