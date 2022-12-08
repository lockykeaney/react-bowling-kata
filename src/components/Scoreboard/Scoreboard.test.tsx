import React from 'react';
import Scoreboard from './Scoreboard';
import { render, screen } from '@testing-library/react';

const gameScore = [
  {
    rollOne: 4,
    rollTwo: 3,
  },
  {
    rollOne: 7,
    rollTwo: 1,
  },
  {
    rollOne: 0,
    rollTwo: 9,
  },
  {
    rollOne: 10,
  },
];

describe('Scoreboard', () => {
  it('Should render 10 empty Frames', () => {
    render(<Scoreboard />);
    const frames = screen.getAllByTestId('Frame');
    expect(frames.length).toEqual(10);
  });

  it('Should display a partial score when an incomplete score array is passed', () => {});
});
