// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardEl = document.getElementById("newCard-el");



function startBtn() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function renderGame() {
    // cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard; -- previuous line , now converting it into an array;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + "  "
    }
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

function newCardBtn() {
    // console.log("Drawing a new card from the deck");
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card;
        newCardEl.textContent = "Your new card is: " + card;
        cards.push(card);
        renderGame();
    }
}


