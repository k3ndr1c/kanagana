import React from 'react';
import './ScoreDisplay.css'

export default function ScoreDisplay({ title, value }) {

  return (
    <div className="score-display">
      <div className="title">
        { title + ':' }
      </div>
      <div className="value">
        { value }
      </div>
    </div>
  );
}
