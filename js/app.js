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


// variables

let winner;
let playerTotal = 0;
let dealerTotal;

// cached elements
const playerDrawBtn = document.querySelector('#playerDrawBtn');



// functions

const dealACard = () => {
  // generate random number 1-11
  let currentDraw = Math.floor(Math.random() * 12);
  // add the number to the player total
  playerTotal = playerTotal + currentDraw;
  console.log(playerTotal);
};

// basic logic for playerTotal
// playerTotal = playerTotal + currentDraw

// create a button the user can click so it would mimic a draw

// event listeners
playerDrawBtn.addEventListener('click', dealACard);