// Array for all card objects-properties
var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    card: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    card: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    card: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

// Array for cards in play
var cardsInPlay = [];

// Function to check for a match
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    alert("You found a match!");
  } else {
    console.log("Sorry, try again.");
    alert("Sorry, try again.");
  }
};

//  Function for flipping a card
var flipCard = function () {
  cardId = this.getAttribute('data-id');
  console.log(cardId);

  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId].card);

  // Show card suite
  this.setAttribute('src', cards[cardId].cardImage);

  // Check if two cards are picked
  if (cardsInPlay.length === 2) {
    // If yes call the checkForMatch function
    checkForMatch();
    // Empty cards in play array for next try
    cardsInPlay = [];
  }
};

// Function that will create your board
var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');

    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);

    document.getElementById('game-board').appendChild(cardElement);

  }

cardElement.addEventListener('click', reset);
}

// Call the createBoard function to create the board.
createBoard();
