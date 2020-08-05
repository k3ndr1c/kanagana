import React from 'react';
import './Button.css'


export default function Button({onClick, children }) {

  return (
    <div
      className="button"
      onClick={onClick}
    >
      { children }
    </div>
  );
}