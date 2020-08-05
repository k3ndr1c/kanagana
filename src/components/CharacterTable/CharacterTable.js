import React, { useState } from 'react';
import './CharacterTable.css'

import Button from '../Button';
import Character from '../Character';
import RadioButton from '../RadioButton';

import characterData from '../../data/charactersArray.json';

export default function CharacterTable({ characterType, characters, setCharacters }) {
  const [checkAll, setCheckAll] = useState(false);

  function renderRadioButton(row, index) {
    return (row[0].type === characterType) ? 
      <RadioButton 
        checked={characters[index]} 
        rowIndex={index}
      /> : null
  }
  function handleCheckAll() {
    if (characterType === "hiragana") {
        setCharacters({
          ...characters, 
          [0]: !checkAll,
          [1]: !checkAll,
          [2]: !checkAll,
          [3]: !checkAll,
          [4]: !checkAll,
          [5]: !checkAll,
          [6]: !checkAll,
          [7]: !checkAll,
          [8]: !checkAll,
          [9]: !checkAll,
          [10]: !checkAll,
          [11]: !checkAll,
          [12]: !checkAll,
          [13]: !checkAll,
          [14]: !checkAll,
          [15]: !checkAll
        });
    }
    else if (characterType === "katakana") {
      setCharacters({
        ...characters, 
        [16]: !checkAll,
        [17]: !checkAll,
        [18]: !checkAll,
        [19]: !checkAll,
        [20]: !checkAll,
        [21]: !checkAll,
        [22]: !checkAll,
        [23]: !checkAll,
        [24]: !checkAll,
        [25]: !checkAll,
        [26]: !checkAll,
        [27]: !checkAll,
        [28]: !checkAll,
        [29]: !checkAll,
        [30]: !checkAll,
        [31]: !checkAll
      });
    }
    setCheckAll(!checkAll);
  }

  
  const characterTable = characterData.map((row, index) => (
      (row[0].type === characterType) ? 
        <div 
          key={index} 
          className="row" 
          onClick={() => setCharacters({...characters, [index]: !characters[index] })}
        >
          { renderRadioButton(row, index) }
          
          {row.filter(c => c.type === characterType)
            .map(c => (
              <Character 
                key={c.id}
                kana={c.kana}
                romaji={c.romaji}
                rowIndex={index}
                characterId={c.id}
              />
            ))
          }
        </div> : null
    )
  );

  return (
    <div>
      <div className="button-container">
        <Button
          onClick={handleCheckAll}
        >
          check all
        </Button>
      </div>
      <div className="character-table" >
        { characterTable }
      </div>
    </div>
  );
}