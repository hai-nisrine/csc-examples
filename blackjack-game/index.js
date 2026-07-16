let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


function getRandomCard() {
    return Math.floor(Math.random() * (13))

}

function startGame () {
    renderGame()
}

function renderGame() {

    cardsEl.textContent= "Cards: "

    for (let i = 0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " +sum

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

messageEl.textContent = message

}

function newCard() {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}