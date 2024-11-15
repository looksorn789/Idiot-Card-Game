# Game Requirements

* Standard 52 card deck
* 2 - 4 Players

## Card Rules

### Standard Cards

* 3 - lowest value card
* A - highest value card

### Wild Cards

* 2 - "Reset"
  * The next player can play any card
* 5 - "Reverse"
  * Player order reverses
* 7 - "Lower"
  * The next player must play a card that is less than 7 or a Wild Card
* 10 - "Bomb"
  * The center pile is cleared and the current player may play another card

### Special Interactions

* Playing 4 of the same card is also considered as a "Bomb"
* When there are two players left in the game, a 5 (Reverse card) acts as a "Skip"
  * The next player's turn is skipped
* When an even number of 5's (Reverse card) are played, the effect of 5 is cancelled
  * Does not reverse the player order
  * Does not skip the next player's turn when there are two players

# Initial Game State

1. Each player is dealt their face down cards ( 3 Face-Down Life )
2. Each player is dealt their hand ( 6 cards )
3. Players select the cards to be played above Life cards ( 3 Face-Up Life )
4. Players declare if they have a card with the value of 3
   1. If no player has a card with the value of 3, then go to the next highest card (ex. 4) until a player is able to play a card
5. The player with the lowest card in the counter-clockwise most position goes first
   1. If two players have equal value cards, then the players will decide who will go first using some given method:
      1. Rock - Paper - Scissors
      2. Coin Flip

# Game Logic

1. A player can pick up the center pile during their turn
2. A player can play any card that is greater than or equal to the current card's value in the center pile *OR* any Wild Card during their turn
3. If a player cannot play a card, they must pick up the center pile
4. After playing a card, if a player is to have less than 3 cards in hand *AND* the draw stack has cards, the player must draw cards until they have 3 cards in hand
5. If the draw stack has 0 cards and the player exhausts their hand, they may play up to 3 of their Face-Up Life cards of the same value
6. If the player has no playable card from their Face-Up Life cards, they must pick up the center pile and may add up to 3 of their Face-Up Life cards of the same value to their hand
7. If the player exhausts their Face-Up Life cards and has 0 cards in hand, they may select one of the Face-Down Life cards to play
   1. Upon playing the Face-Down Life card, a condition is checked to see that the card is greater than or equal to the current card or any Wild Card
   2. If the condition is false, then the player must pick up the center pile
8. A player wins by exhausting all cards in their hand and Life cards
9. A player loses by being the last person in the game
