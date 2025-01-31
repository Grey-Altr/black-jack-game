// our cards will be the numbers 1-11 in our first pass
// the player chooses to get a card
// the total of those cards are added up
// the player has the choice to stop getting cards

// the dealer
// after the player has completed their turn
// dealer gets cards
// dealer stops at a certain point
// comparison of cards ensues
// the dealer must draw if they are =< 17

// rules
// the player wins when:
// the player's total is equal to 21
// the player's total is higher than the dealer
// the dealer goes over 21

// the player loses when:
// the dealer hits 21 and the player is not at that total
// the player goes higher than 21
// the dealer is closer to 21 than the player

// current bugs
// random number sometimes generates a zero
// dry up math methods


// variables

let winner;
let playerTotal = 0;
let dealerTotal;
let playerTurn = true; //starting value of the player turn

// cached elements
const playerDrawBtn = document.querySelector('#player-draw-btn');
const changeTurn = document.querySelector('#stay-btn');
const playerTotalDisplay = document.querySelector('#player-total');
const dealerTotalDisplay = document.querySelector('#dealer-total');


// functions

const startGame = () => {
    // draw the two player cards
    let playerCardOne = Math.floor(Math.random() * 12);
    let playerCardTwo = Math.floor(Math.random() * 12);
    // set the playerTotal to those two cards
    playerTotal = playerCardOne + playerCardTwo;

    // draw the dealer card
    let dealerCardOne = Math.floor(Math.random() * 12);
    // set the dealerTotal to the dealer card;
    dealerTotal = dealerCardOne;

    playerTotalDisplay.innerText = playerTotal;
    dealerTotalDisplay.innerText = dealerTotal;

}

const dealACard = () => {
  // generate random number 1-11
  let currentDraw = Math.floor(Math.random() * 12);
  // add the number to the player total
  playerTotal = playerTotal + currentDraw;
  playerTotalDisplay.innerText = playerTotal;
};

const switchToDealer = () => {
    playerTurn = false;
}

// basic logic for playerTotal
// playerTotal = playerTotal + currentDraw

// create a button the user can click so it would mimic a draw

// event listeners
playerDrawBtn.addEventListener('click', dealACard);
changeTurn.addEventListener('click', switchToDealer);

startGame();