//assign values to the key variables
let letters = []
let words = []

//DOM manipulation
const letterBox = document.getElementById("letter-box");

const wordBox = document.getElementById("word-box");

const letterInput = document.getElementById("letter")

const wordInput = document.getElementById("word")

//event listeners
letterInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("letter-button").click()
        document.getElementById("letter").value = ""
    }
})

wordInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("word-button").click()
        document.getElementById("word").value = ""
    }
})

//make letter array
function makeLetterArray() {
    let newLetter = document.getElementById("letter").value
    letters.push(newLetter)
    letterBox.innerText = `[${letters},]`
}

//make word array
function makeWordArray() {
    let newWord = document.getElementById("word").value
    words.push(newWord)
    wordBox.innerText = `[${words},]`
}