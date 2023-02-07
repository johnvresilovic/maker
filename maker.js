//assign values to the key variables
let letters = []
let words = []
let pangrams = []

//DOM manipulation
const letterBox = document.getElementById("letters-box");

const wordBox = document.getElementById("words-box");

const pangramsBox = document.getElementById("pangrams-box");

const nameBox = document.getElementById("pangrams-box");

const nameInput = document.getElementById("puzzle-name");

const letterInput = document.getElementById("letter")

const wordInput = document.getElementById("word")

const pangramsInput = document.getElementById("pangrams");

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

pangramsInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("pangrams-button").click()
        document.getElementById("pangrams").value = ""
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

//make pangrams array
function makePangramsArray() {
    let newPangram = document.getElementById("pangrams").value
    pangrams.push(newPangram)
    pangramBox.innerText = `[${pangrams},]`
}