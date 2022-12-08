import React from 'react';
import Frame, { FrameScore } from './Frame';
import type { RollsForFrame } from './Frame';
import { render, screen } from '@testing-library/react';

describe('Frame', () => {
  it('should render empty if no rolls and total score is 0', async () => {
    render(<Frame rolls={{}} totalGameScore={0} />);
    const elements = await screen.getAllByTestId('value');
    expect(elements.length).toEqual(3);
    elements.forEach(elem => {
      expect(elem).toBeEmptyDOMElement();
    });
  });
  it('should render a 4 after the first roll without changing the total', async () => {
    const data: RollsForFrame = {
      firstRoll: 4,
    };
    render(<Frame rolls={data} totalGameScore={0} />);
    expect(await screen.findByText(4)).toBeVisible();
  });

  it('should render a 4 and 3 after the second roll', async () => {
    const data: RollsForFrame = {
      firstRoll: 4,
      secondRoll: 3,
    };
    render(<Frame rolls={data} totalGameScore={0} />);
    expect(await screen.findByText(4)).toBeVisible();
    expect(await screen.findByText(3)).toBeVisible();
  });

  it('should display the total score from after 2 rolls have been completed and total score is less than 10', async () => {
    const data: RollsForFrame = {
      firstRoll: 5,
      secondRoll: 4,
    };
    render(<Frame rolls={data} totalGameScore={10} />);
    expect(await screen.findByText(19)).toBeVisible();
  });

  it('should render a SPARE if the second roll adds up to 10', async () => {
    const data: RollsForFrame = {
      firstRoll: 5,
      secondRoll: 5,
    };
    render(<Frame rolls={data} totalGameScore={0} />);
    const elements = await screen.getAllByTestId('value');
    expect(elements[1]).toHaveTextContent('/');
    expect(elements[2]).toBeEmptyDOMElement();
  });

  it('should render a STRIKE if the first roll is 10', async () => {
    const data: RollsForFrame = {
      firstRoll: 10,
    };
    render(<Frame rolls={data} totalGameScore={0} />);
    const elements = await screen.getAllByTestId('value');
    expect(elements[0]).toBeEmptyDOMElement();
    expect(elements[1]).toHaveTextContent('X');
    expect(elements[2]).toBeEmptyDOMElement();
  });
  it('should render the SPARE bonus after the first roll of the next frame', async () => {
    const data: FrameScore = {
      rolls: {
        firstRoll: 3,
      },
      totalGameScore: 25,
    };
  });
  it('should render the STRIKE bonus after the second roll of the next frame', async () => {});
});
