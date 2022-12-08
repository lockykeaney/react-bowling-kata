import React from 'react';
import App from './App';

import { render, screen } from '@testing-library/react';

function setup() {
  return render(<App />);
}

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText('Welcome to React Bowling')).toBeInTheDocument();
});

it('should render out a scoreboard with 10 frames', () => {
  render(<App />);
  const frames = screen.queryAllByTestId('frame');
  expect(frames.length).toEqual(10);
});

it('should initialize with a total score of 0', () => {
  render(<App />);
});
