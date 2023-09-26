let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardEl = document.getElementById("newCard-el");

function startBtn(){
    renderGame();
}

function renderGame(){
    // cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard; -- previuous line , now converting it into an array;
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
}

function newCardBtn(){
    console.log("Drawing a new card from the deck");
    let card = 8;
    sum += card;
    newCardEl.textContent = "Your new card is: " + card;
    cards.push(card);
    renderGame();
}


