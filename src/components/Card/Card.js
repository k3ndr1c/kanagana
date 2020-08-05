import React from 'react';
import './Card.css';

export default function Card({ kana, romaji, showCharacter }) {
  
  return (
    <div className="card">
      <div className="card-kana">
        { kana }
      </div>
      { (showCharacter) ?
        <div className="card-romaji">
          { romaji }
        </div> : null
      }
    </div>
  );
}