/* eslint-disable react/button-has-type */
import React from 'react';
import { useHistory } from 'react-router';

const Index = () => {
  const history = useHistory();
  const launchNewGame = () => {
    history.push('/home');
  };
  return (
    <div>
      <button onClick={launchNewGame}>New Game</button>
    </div>
  );
};

export default Index;
