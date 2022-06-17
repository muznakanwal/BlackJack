let userName = prompt("Please enter your name")

let firstNumber = Math.floor((Math.random()*13)+1)
let secondNumber = Math.floor((Math.random()*13)+1)
let thirdNumber = Math.floor((Math.random()*13)+1)
let hasBlackJack = false
let isAlive = true
let cards = [firstNumber, secondNumber]
let totalSum = 0
//let randomnumber = Math.floor((Math.random()*11)+1)


let callh1 = document.getElementById("welcome")
let callmessage = document.getElementById("message")
let callcards = document.getElementById("cards")
let callsum = document.getElementById("sum")


callh1.textContent += ", " + userName + "!"
// function hello(){
//     console.log("this is from hello")
// }

function renderGame() {    
    // for (let i = 0; i < cards.length; i++) {
    //     cards(i)
    // } return cards
    // console.log(cards)
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(thirdNumber)
    
    let sum = 0
    for (let i = 0; i < cards.length; i++){
        sum += cards[i];
    }
    totalSum = sum

    document.getElementById("start").disabled = true
    callcards.textContent = "Cards: | " 
    for (let i = 0; i < cards.length; i++){
    callcards.textContent += cards[i] + " | "}
    callsum.textContent = "Sum: " + totalSum
    // console.log(cards)

    if (totalSum < 21){
        callmessage.textContent = "Would you like to draw a new card?"
    } else if (totalSum === 21) {
        callmessage.textContent = "Congratulations! You've got BlackJack!"
        document.getElementById("drawNew").disabled = true
        hasBlackJack = true
    } else {
        callmessage.textContent = "Your score went over 21. Better luck next time!"
        isAlive = false
        document.getElementById("drawNew").disabled = true
    }
    if (isAlive==true && hasBlackJack==false && document.getElementById("drawNew").disabled == true) {
        callmessage.textContent = "Better luck next time!"
    }
}

function newCard(){
    document.getElementById("drawNew").disabled = true
    cards.push(thirdNumber)
    //console.log(totalSum)
    renderGame()
}

function resetGame() {
    //location.reload()
    document.getElementById("drawNew").disabled = false
    document.getElementById("start").disabled = false
    callmessage.textContent = "Would you like to play a game?"
    callcards.textContent = "Cards: "
    callsum.textContent = "Sum: "
    cards.pop()
    firstNumber = Math.floor((Math.random()*13)+1)
    secondNumber = Math.floor((Math.random()*13)+1)
    thirdNumber = Math.floor((Math.random()*13)+1)
    cards = [firstNumber, secondNumber]
    console.log(cards)
    totalSum = 0
    hasBlackJack = false
    isAlive = true
}

