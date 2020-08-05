import React, { useState } from 'react';
import './Game.css';

import Card from '../Card';
import ScoreDisplay from '../ScoreDisplay';

export default function Game({ 
  currentTab,
  correctAnswers, 
  setCorrectAnswers, 
  totalAnswers, 
  setTotalAnswers,
  pickCharacter,
  randomCharacter,
  setRandomCharacter,
  showCharacter,
  setShowCharacter,
}) {

  const [textInput, setTextInput] = useState('');
  const show = (currentTab === 'practice');
  
  function handleCorrectInput() {
    setShowCharacter(false);
    setRandomCharacter(pickCharacter);
    setTextInput('');
    setCorrectAnswers(correctAnswers + 1);
    setTotalAnswers(totalAnswers + 1);
  }
  function handleIncorrectInput() {
    setShowCharacter(true);
    setTextInput('');
  }
  function submitHandler(event) {
    const { romaji } = randomCharacter;
    const key = event.key;

    if (!showCharacter) {
      if (key === 'Enter' || key === 'Space') {
        if (textInput === romaji) {
          handleCorrectInput();
        }
        else {
          handleIncorrectInput();
        }
      }
      else if (key === 'Backspace') {
        if (textInput.length >= 1) {
          setTextInput(textInput.slice(0, -1));
        }
      }
    }
    else {
      if (key === 'Enter' || key === 'Space') {
        setShowCharacter(false);
        setRandomCharacter(pickCharacter);
        setTextInput('');
        setTotalAnswers(totalAnswers + 1);
      }
    }
  }
  function handleTextInput(event) {
    const { romaji } = randomCharacter;
    const characterLength = romaji.length;
    const key = event.target.value;
    
    if (!showCharacter) {
      if (key >= 'a' && key <= 'z') {
        setTextInput(event.target.value);
        const val = event.target.value
        if (characterLength === 1) {
          if (val.length === 2 && Math.abs(val.length - characterLength) >= 1) {
            handleIncorrectInput();
          }
        }
        else if (characterLength === 2) {
          if (val.length === 3 && Math.abs(val.length - characterLength) >= 1) {
            handleIncorrectInput();
          }
        }
        else if (characterLength === 3) {
          if (val.length === 4 && Math.abs(val.length - characterLength) >= 1) {
            handleIncorrectInput();
          }
        }
      }
    }
  }
  function renderX() {
    const x = (
      <img 
        height="30px"
        width="30px"
        src="../../red-x.png" 
        alt="red x"
      />
    );

    return (showCharacter) ? x : null;
  }
  function getStyle(show){
    return (show) ? {
      display: "flex",
      height: "490px"
    } : {
      display: "none",
      height: ""
    }
  }


  return (
    <div 
      className="game"
      style={getStyle(show)}
    >
      <div className="instructions">
        Type out the rōmaji  of the character then press ENTER
      </div>
      <div className="game-content">
        <ScoreDisplay 
          title="Correct"
          value={correctAnswers}
        />
        <div className="game-inner-content">
          <div className="symbol">
            { renderX() }
          </div>
          <Card 
            kana={randomCharacter["kana"]}
            romaji={randomCharacter["romaji"]}
            showCharacter={showCharacter}
          />
          <input 
            className="game-input"
            onKeyDown={submitHandler}
            tabIndex="1"
            value={textInput} 
            type="text"
            onChange={handleTextInput}
          />
        </div>
        <ScoreDisplay 
          title="Total"
          value={totalAnswers}
        />
      </div>
    </div>
  );
}