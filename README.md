# Cat Survival Game 🐱🎮
Play the Game!

## Description
Cat Survival Game is a browser-based game where the player controls a cat using the keyboard. The goal is to survive as long as possible by collecting items to increase the score while avoiding obstacles. As the game progresses, it becomes more challenging.

---

## Main Functionalities
- Move the cat using arrow keys
- Spawn obstacles and collectible items at random positions
- Collision detection between the cat and game objects
- Score system that increases by collecting yarn
- Cat grows bigger when collecting pizza, increasing difficulty
- Game over when colliding with a cactus
- Sound effects for actions and events
- High score saved using localStorage
- Restart game without page reload

---

## Backlog Functionalities
- Increase game speed over time
- Add levels or difficulty indicators
- Add mute / sound toggle button
- Mobile controls support
- Different cat skins or themes

---

## Technologies Used
- HTML
- CSS
- JavaScript (ES6)
- DOM Manipulation
- Local Storage
- Audio API

---

## States
- **Start Screen**: Shows game instructions and start button  
- **Game Screen**: Main gameplay view  
- **Game Over Screen**: Displays final score, high score, and restart button  

---

## Project Structure

### main.js
- DOM selection and game state variables
- Event listeners for keyboard and buttons
- Game loop logic
- Collision handling
- Spawning and despawning items
- Score and high-score logic
- Game start, game over, and restart logic

### Cat.js
- Cat class
- Properties: position, size, movement states
- Methods:
  - `moving()`

### Cactus.js
- Cactus class
- Properties: position, size, DOM element
- Methods:
  - `movingCactus()`

### Pizza.js
- Pizza class
- Properties: position, size, DOM element
- Methods:
  - `movingPizza()`

### YarnBall.js
- YarnBall class
- Properties: position, size, DOM element
- Methods:
  - `movingYarn()`

---

## Extra Links

### Sketch
[https://drive.google.com/file/d/16v8rzzdLq5BJSAtWatznCZiemJX-gscr/view]

### Trello
[https://trello.com/invite/b/69773869f4340f15ab286e8d/ATTI1d78c00aeb432e7f3ab472e868246873479458C5/game]

### Slides
[https://www.canva.com/design/DAG_4lVXi9w/0PUYWlrNTXtO0TFKmxbr6A/edit?utm_content=DAG_4lVXi9w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton]

### Deploy
[https://elahe.github.io/pishoo-the-cat/]
