# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Alexander Raschid

Time spent: **~12+** hours spent in total

Link to project: https://alexraschid.github.io/codepath2022prework/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Built using React Hooks
- [x] Bootstrap
- [x] Mobile Responsive
- [x] Level Counter
- [x] Farts

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Winning:
![win](https://user-images.githubusercontent.com/9421693/160240142-8990d6d3-4c0a-4430-87fa-431d8a1d8163.gif)

Level Counter (new):
![Level counter](https://user-images.githubusercontent.com/9421693/160264021-7ff4a1b6-26d4-4ae1-8b56-d4064d9c1d8b.gif)

Random patterns, losing, pausing, restarting
![random patterns plus loseing plus pausing](https://user-images.githubusercontent.com/9421693/160240149-e9584e81-4ce0-41c5-a162-9738e0fd7c57.gif)

Mobile Responsiveness
![mobile responsive](https://user-images.githubusercontent.com/9421693/160240129-240730bc-ffab-4d26-bb5a-38ef8733ffdd.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

https://reactjs.org/docs/hooks-intro.html

https://getbootstrap.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I faced when creating this submission was the decision to use React and Hooks as opposed to following the guide. I saw the problem and thought, if it could be solved with lower level HTML, CSS, JavaScript, what would stop React from handling this? I wanted to use this as an opportunity to not only learn more about React, but to also create a game that is playable in the browser! In addition to using React, I also wanted to theme the project to be fart based. This caused some compications when getting audio to sync with when a clue is played on screen. Due to the pre-recorded sounds, it would make implementing some features such as terminating a sound mid play difficicult to achieve as compared to using an audio element. Developing a game alone using through react required me to learn a lot more about the workings of the framework. Using Hooks I got to learn more about eachHook's lifecycle. Constant googling, testing with console.log, and taking breaks were my best friends on this assignment.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

What other technologies would a developer use to make a playable in browser game? Are developers still even making browser games? What would a multiplayer browser game look like in terms of development?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would work on both audio and the stylistic design of the site. The audio as it is right now plays a pre-recorded clip. I would like to add an option of customizing which buttons play which audio, and audio slider, and would make the title/description pop more.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/82f7f65268da48888fc6f2458f3972d0)


## License

    Copyright Alexander Raschid

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
