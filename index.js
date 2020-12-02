// class Player {
//   constructor(name, char, price = 0) {
//     this.name = name;
//     this.char = char;
//     this.createdDate = new Date();
//     this.id = "" + Date.now();
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
// }

// class CharacterPattern extends Player {
//   constructor(character) {
//     super();
//     this.character = character;
//   }

//   getPrice() {
//     return this.character.getPrice();
//   }
// }

// class HatPattern extends CharacterPattern {
//   constructor(character) {
//     super(character);
//   }

//   getPrice() {
//     return super.getPrice() + 3;
//   }
// }

// class PantsPattern extends CharacterPattern {
//   constructor(character) {
//     super(character);
//   }

//   getPrice() {
//     return super.getPrice() + 3;
//   }
// }
// class SoudPattern extends CharacterPattern {
//   constructor(character) {
//     super(character);
//   }

//   getPrice() {
//     return super.getPrice() + 3;
//   }
// }

// export { Player, HatPattern, PantsPattern };


//  <== game ===>
const submitBtn = document.querySelector('.submit_btn');
const game = document.querySelector(".fields_container");
const res = document.querySelector(".res");
// const money = document.querySelector(".money");
const btnGame = document.querySelector(".new__game");
const fields = document.querySelectorAll(".field");
const field1 = document.querySelector("#field1");
let step = false;
let count = 0;
const zero = "O";
const cross = "X";

function stepCross() {
  field1.innerHtml = cross;
  field1.classList.add("x");
  count++;
}

field1.addEventListener("click", stepCross);
console.log(field1);

function stepZero(target) {
  target.innerHtml = zero;
  target.classList.add("o");
  count++;
}



function init(e) {
  if (!step) stepCross(e.target);
  else stepZero(e.target);
  step = !step;
  win();
}
function newGame(params) {}

function win(params) {
  const comb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < comb.length; i++) {
    if (
      fields[comb[i][0]].classList.contains("x") &&
      fields[comb[i][1]].classList.contains("x") &&
      fields[comb[i][2]].classList.contains("x")
    ) {
      setTimeout(() => {
        fields[comb[i][0]].classList.add("active");
        fields[comb[i][1]].classList.add("active");
        fields[comb[i][2]].classList.add("active");
        res.innerText = "The winner is" + name;
      }, 1500);
      game.removeEventListener("click", init);
    } else if (
      fields[comb[i][0]].classList.contains("o") &&
      fields[comb[i][1]].classList.contains("o") &&
      fields[comb[i][2]].classList.contains("o")
    ) {
      setTimeout(() => {
        fields[comb[i][0]].classList.add("active");
        fields[comb[i][1]].classList.add("active");
        fields[comb[i][2]].classList.add("active");
        res.innerText = "The winner is" + name;
      }, 1500);
      game.removeEventListener("click", init);
    }
    else if(count == 9){
        res.innerText = "Draw";
        game.removeEventListener('click', init);
    }
  }
}



// btnGame.addEventListener("click", newGame);
// game.addEventListener("click", init);

// const N_SIZE = 3,
//   EMPTY = '&nbsp;',
//   boxes = [],
//   turn = 'X',
//   score,
//   moves;

// /**
//  * New game
//  */
// function startNewGame() {
//   score = {
//     'X': 0,
//     'O': 0
//   };
//   moves = 0;
//   turn = 'X';
//   boxes.forEach(function (square) {
//     square.innerHTML = EMPTY;
//   });
// }

// /**
//  * Check if a win or not
//  */
// function win(clicked) {
//   // Get all cell classes
//   const memberOf = clicked.className.split(/\s+/);
//   for (const i = 0; i < memberOf.length; i++) {
//     const testClass = '.' + memberOf[i];
//     const items = contains('#tictactoe ' + testClass, turn);
//     // winning condition: turn == N_SIZE
//     if (items.length == N_SIZE) {
//       return true;
//     }
//   }
//   return false;
// }

// /**
//  * Helper function to check if NodeList from selector has a particular text
//  */
// function contains(selector, text) {
//   const elements = document.querySelectorAll(selector);
//   return [].filter.call(elements, function (element) {
//     return RegExp(text).test(element.textContent);
//   });
// }

// /**
//  * Sets clicked square and also updates the turn.
//  */
// function set() {
//   if (this.innerHTML !== EMPTY) {
//     return;
//   }
//   this.innerHTML = turn;
//   moves += 1;
//   score[turn] += this.identifier;
//   if (win(this)) {
//     alert('Winner: Player ' + turn);
//     startNewGame();
//   } else if (moves === N_SIZE * N_SIZE) {
//     alert('Draw');
//     startNewGame();
//   } else {
//     turn = turn === 'X' ? 'O' : 'X';
//     document.getElementById('turn').textContent = 'Player ' + turn;
//   }
// }
