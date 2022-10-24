import React from 'react';
import { connect } from 'react-redux';

const GameState = ({ correctGuesses, remaining }) => {
  const guessText = correctGuesses === 1 ? 'guess' : 'guesses';

  return (
    <div>
      <p>{remaining} cards remaining</p>
      <p>{correctGuesses} correct {guessText}</p>
    </div>
  )
}

export default connect(
  ({
    deck: { remaining },
    gameState: { correctGuesses }
  }) => ({ remaining, correctGuesses })
)(GameState);
