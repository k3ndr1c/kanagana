import React from 'react';
import './RadioButton.css';

export default function RadioButton({ checked, rowIndex }) {

  function getClass() {
    if (rowIndex === 0 || rowIndex === 16) {
      return "box top-left";
    }
    else if (rowIndex === 15 || rowIndex === 31) {
      return "box bottom-left";
    }

    return "box"
  }

  return (
    <div
      style={{width: '20px'}} 
      className={getClass()}
    >
      <input 
        onChange={() => null}
        checked={checked} 
        className="radio-button" 
        type="radio" />
    </div>
  );

} 