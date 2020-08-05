import React, { useState } from 'react';
import CharacterTable from '../CharacterTable';

import './Table.css';

export default function Table({ characters, setCharacters, currentTab }) {
  const showTable = (currentTab === 'home');
  const [tableType, setTableType] = useState('hiragana');
  
  function onClickTitle(type) {
    if (type === 'hiragana') {
      return () => {
        setTableType('hiragana');
      }
    }
    else {
      return () => {
        setTableType('katakana');
      }
    }
  }

  function diplayTable(type) {
    if (type === 'hiragana') {
      if (tableType === 'hiragana') {
        return { display: 'flex' };
      }
      
      return { display: 'none' };
    }

    if (tableType === 'katakana') {
      return { display: 'flex' };
    }
    return { display: 'none' };
  }

  function styleTitle(type) {
    if (tableType === type) {
      return 'table-title selected';
    }
    return 'table-title';
  }

  return (
  <div 
    style={{display: `${(showTable) ? "flex" : "none"}`}} 
    className="table-container"
  >
    <div className="table-title-container">
      <div 
        className={styleTitle('hiragana')}
        onClick={onClickTitle('hiragana')}
      >
        Hiragana
      </div>
      <div 
        className={styleTitle('katakana')}
        onClick={onClickTitle('katakana')}
      >
        Katakana
      </div>
    </div>
    <div className="table-content">
      <div style={diplayTable('hiragana')}>
        <CharacterTable 
          characterType="hiragana"
          characters={characters}
          setCharacters={setCharacters}
        />
      </div>
      <div style={diplayTable('katakana')}>
        <CharacterTable 
          characterType="katakana"
          characters={characters}
          setCharacters={setCharacters}
        />
      </div>
    </div>
  </div>
  );
}