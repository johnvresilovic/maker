//assign values to the key variables
let letters = [];
let words = [];
let pangrams = [];

//DOM manipulation
const lettersBox = document.getElementById("letter-box");

const wordsBox = document.getElementById("word-box");

const pangramsBox = document.getElementById("pangram-box");

const puzzleNameBox = document.getElementById("puzzle-name-box");

const nameInput = document.getElementById("puzzle-name");

const letterInput = document.getElementById("letter");

const wordInput = document.getElementById("word");

const pangramInput = document.getElementById("pangram");

//event listeners
letterInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("letter-button").click();
    document.getElementById("letter").value = "";
  }
});

wordInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("word-button").click();
    document.getElementById("word").value = "";
  }
});

pangramsInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("pangram-button").click();
    document.getElementById("pangram").value = "";
  }
});

nameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("name-button").click();
      document.getElementById("puzzle-name").value = "";
    }
  });

//make letter array
function makeLettersArray() {
  let newLetter = document.getElementById("letter").value;
  letters.push(newLetter);
  letterBox.innerText = `[${letters},]`;
}

//make word array
function makeWordsArray() {
  let newWord = document.getElementById("word").value;
  words.push(newWord);
  wordBox.innerText = `[${words},]`;
}

//make pangrams array
function makePangramsArray() {
  let newPangram = document.getElementById("pangram").value;
  pangrams.push(newPangram);
  pangramBox.innerText = `[${pangrams},]`;
}

//display puzzle name
function displayPuzzleName() {
  let puzzleName = document.getElementById("puzzle-name").value;
  puzzleNameBox.innerText = `${puzzleName}`;
}
