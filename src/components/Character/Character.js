import React from 'react';
import './Character.css';

export default function Character({characterId, kana, romaji, rowIndex}) {
  function getClass() {
    if ((rowIndex === 0 || rowIndex === 16) && ((characterId === 4) || (characterId === 84))) {
      return "box character top-right";
    }
    else if ((rowIndex === 15 || rowIndex === 31) && ((characterId === 79) || (characterId === 159))) {
      return "box character bottom-right";
    }
    return "box character"
  }
  
  return (
    <div className={getClass()}>
      <div className="kana">{kana}</div>
      <div className="romaji">{romaji}</div>
    </div>
  );
}