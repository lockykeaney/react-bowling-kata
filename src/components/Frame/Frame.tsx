import React, { useEffect, useState } from 'React';

export type RollsForFrame = {
  firstRoll?: number;
  secondRoll?: number;
};

export type FrameScore = {
  rolls: RollsForFrame;
  totalGameScore: number;
};
const Frame = ({ rolls, totalGameScore }: FrameScore) => {
  const { firstRoll, secondRoll } = rolls;
  const [firstRollState, setFirstRollState] = useState<number | undefined>(firstRoll);
  const [secondRollState, setSecondRollState] = useState<number | '/' | 'X' | undefined>(secondRoll);
  const [totalScore, setTotalScore] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (firstRoll === 10) {
      setFirstRollState(undefined);
      setSecondRollState('X');
    }
    if (firstRoll && secondRoll) {
      if (firstRoll + secondRoll === 10) {
        setFirstRollState(firstRoll);
        setSecondRollState('/');
      } else {
        setFirstRollState(firstRoll);
        setSecondRollState(secondRoll);
        setTotalScore(totalGameScore + firstRoll + secondRoll);
      }
    }
  }, [firstRoll, secondRoll]);
  return (
    <div data-testid="Frame">
      <div data-testid="value">{firstRollState}</div>
      <div data-testid="value">{secondRollState}</div>
      <div data-testid="value">{totalScore}</div>
    </div>
  );
};

export default Frame;
