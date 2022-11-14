A fun template to practice Test-driven development in React with Jest+Enzyme.
Inspired by Uncle Bob's famous [Bowling Game Kata](http://butunclebob.com/files/downloads/Bowling%20Game%20Kata.ppt)

# Welcome to React Bowling

The local bowling alley needs an app to keep a score on their bowling games.
You figure this could be your big break into the world of Bowling Software!

You show up at the Bowling alley and see that they have an initial design up for their app,
but with no functionality :O

As it is they have a list of requirements ready:

## Requirements

- `rolling` Clicking any of the numbered buttons should update the scoreboard with the number of pins knocked down for the roll.

- `game score` The game consists of 10 frames. In each frame the player has
  two opportunities to knock down 10 pins. The score for the frame is the total
  number of pins knocked down, plus bonuses for strikes and spares.
- `spare` A spare is when the player knocks down all 10 pins in two tries. The bonus for
  that frame is the number of pins knocked down by the next roll. So in frame 3
  above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
  number of pins knocked down on the next roll.)
- `strike` A strike is when the player knocks down all 10 pins on his first try. The bonus
  for that frame is the value of the next two balls rolled.
- `10th frame` In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
  balls to complete the frame. However no more than three balls can be rolled in
  tenth frame.

1. A Game is the entire score (Scoreboard)
2. A Game is made up of 10 Frames
3. A Frame has 1 or 2 Rolls
   1. A Frame starts with 10 pins standing up. Each roll can knock down between 0 and 10 pins.
   2. A spare is 10 in 2 rolls, a bonus is added from the first roll of the next frame. **************\*\*\***************If the first roll of the next frame is a 5, the score of the spare frame is 15**************\*\*\***************
   3. A strike is 10 in 1 roll, a bonus is added from the next 2 rolls. ******\*\*\*\*******If the next 2 rolls get a total of 8, the score of the strike frame is 18******\*\*\*\*******
4. The tenth Frame has 2 or 3 rolls (different from all other frames)
   1. If a strike or a spare is rolled, an extra ball can be rolled to finish complete the frame.
   2. No more than 3 rolls
5. A Roll will knock down a number of pins and remove them from the frame
6. The Scoreboard iterates through frames to calculate the score

## Scripts used in project

In the project directory, you can run:

`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

## Tools for testing

The project uses two frameworks to allow Test-driven development

- `jest` Painless javascript testing [(api documentation)](https://facebook.github.io/jest/docs/api.html)
- `testing-library/react` Javascript Testing Utilities for React [(api documentation)](https://testing-library.com/docs/react-testing-library/intro)

Jest is the default test runner with `create-react-app`. Combined with Enzyme it's a powerful toolbox to create unit tests for React Components:

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
