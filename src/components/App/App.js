import React, { useState } from 'react';

import Game from '../Game';
import Table from '../Table';
import Tab from '../Tab';

import characterMap from '../../data/charactersMap.json';
import './App.css';

let chars = { 0: true };
for (var i = 1; i < 32; i++) {
  chars = {...chars, [i]: false}
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [characters, setCharacters] = useState(chars);
  const [characterIndexes, setCharacterIndexes] = useState(createCharacterIndexArray);
  const [randomCharacter, setRandomCharacter] = useState(pickCharacter);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [showCharacter, setShowCharacter] = useState(false);
  const [currentTab, setCurrentTab] = useState("home");

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function highlightTab(tabTitle) {
    return currentTab === tabTitle;
  }
  function resetScore() {
    setCorrectAnswers(0);
    setTotalAnswers(0);
  }
  function onClickHome() {
    setCorrectAnswers(0);
    resetScore();
    setRandomCharacter(pickCharacter);
    setShowCharacter(false);
    setCurrentTab('home');
    setIndex(0);
  }
  function onClickPractice() {
    resetScore();
    setRandomCharacter(pickCharacter);
    setIndex(0);
    setShowCharacter(false);
    setCurrentTab('practice');
  }
  function createCharacterIndexArray() {
    let rowIndexes = [];
    for (const idx in characters) {
      if (characters[idx]) {
        rowIndexes.push(Number(idx));
      }
    }

    const badIndexes = [
      36,
      38,
      46,
      47,
      48,
      51,
      52, 
      53, 
      54,
      116,
      118,
      126,
      127,
      128,
      131,
      132,
      133,
      134,
    ];
    const indexSet = new Set(badIndexes);
    let indexes = rowIndexes
      .map(x => [5*x, 5*x+1, 5*x+2, 5*x+3, 5*x+4])
      .flat()
      .filter((x) => !indexSet.has(x));
    if (indexes.length === 0) {
      indexes = [0, 1, 2, 3, 4];
    }
    shuffle(indexes);
    return indexes;
  }
  function pickCharacter() {
    if (index === characterIndexes.length - 1) {
      setIndex(0);
      setCharacterIndexes(createCharacterIndexArray);
    }
    else {
      setIndex(index + 1);
    }
    const idx = characterIndexes[index]
    const character = characterMap[idx];
    return character;
  }

  return (
    <div className="all">
      <div className="content">
      <div className="logo">KANAGANA</div>
        <div className="tabs">
          <Tab 
            onClick={onClickHome} 
            className="characters-button"
            tabType="left"
            highlight={highlightTab("home")}
          >
            HOME
          </Tab>
          <Tab 
            onClick={onClickPractice} 
            tabType="right"
            highlight={highlightTab("practice")}
          >
            PRACTICE
          </Tab>
        </div>
        <div className="container">
          <Table 
            characters={characters}
            setCharacters={setCharacters}
            currentTab={currentTab}
          />
          <Game 
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            totalAnswers = {totalAnswers}
            setTotalAnswers ={setTotalAnswers}
            pickCharacter ={pickCharacter}
            randomCharacter ={randomCharacter}
            setRandomCharacter ={setRandomCharacter}
            showCharacter ={showCharacter}
            setShowCharacter ={setShowCharacter}
            currentTab={currentTab}
            characterIndexes={characterIndexes}
            setCharacterIndexes={setCharacterIndexes}
          />
        </div>
      </div>
    </div>
  );
}