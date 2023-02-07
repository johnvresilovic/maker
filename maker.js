//assign values to the key variables
let letters = [];
let words = [];
let pangrams = [];

//DOM manipulation
const lettersBox = document.getElementById("letters-box");

const wordsBox = document.getElementById("words-box");

const pangramsBox = document.getElementById("pangrams-box");

const nameBox = document.getElementById("puzzle-name-box");

const nameInput = document.getElementById("puzzle-name");

const letterInput = document.getElementById("letter");

const wordInput = document.getElementById("word");

const pangramInput = document.getElementById("pangrams");

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
    document.getElementById("pangrams-button").click();
    document.getElementById("pangrams").value = "";
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
function makeLetterArray() {
  let newLetter = document.getElementById("letter").value;
  letters.push(newLetter);
  lettersBox.innerText = `[${letters},]`;
}

//make word array
function makeWordArray() {
  let newWord = document.getElementById("word").value;
  words.push(newWord);
  wordsBox.innerText = `[${words},]`;
}

//make pangrams array
function makePangramsArray() {
  let newPangram = document.getElementById("pangrams").value;
  pangrams.push(newPangram);
  pangramsBox.innerText = `[${pangrams},]`;
}

//display puzzle name
function displayPuzzleName() {
  let puzzleName = document.getElementById("puzzle-name").value;
  nameBox.innerText = `${puzzleName}`;
}
