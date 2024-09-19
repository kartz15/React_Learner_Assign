import React from 'react';
import './Learner.css';

function Learner({ learner }) {
  return (
    <div className="learner">
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h3>Scores:</h3>
      <ul className="scores-list">
        {learner.scores.map((scoreEntry, index) => (
          <li key={index}>
            {scoreEntry.date}: {scoreEntry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Learner;
