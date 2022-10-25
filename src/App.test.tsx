import React from 'react';
import App from './App';

import { render, screen } from '@testing-library/react';

function setup() {
  return render(<App />);
}

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getAllByTestId('App').length(45)).toBeTruthy();
});
