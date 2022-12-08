import React from 'React';
import Frame from '../Frame/Frame';

const createNewGame = () => {
    
}

const Scoreboard = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <Frame key={index} rolls={{}} totalGameScore={0} />
      ))}
    </>
  );
};

export default Scoreboard;
