// Function for toggling between the dark and light theme
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
  });
});

// Update the length of generateRandomLetters based on the slider value
const lengthSlider = document.getElementById("lengthSlider");
const lengthDisplay = document.getElementById("lengthDisplay");

lengthSlider.addEventListener("input", function () {
  const newLength = parseInt(lengthSlider.value);
  lengthDisplay.textContent = newLength;
});

// Function to generate a random string of letters
function generateRandomLetters(length) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    randomString += letters.charAt(randomIndex);
  }
  return randomString;
}

// Function to open multiple search tabs
function openMultipleTabs(topics) {
  topics.forEach(function (topic) {
    const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(
      topic
    )}`;
    window.open(searchUrl, "_blank");
  });
}

let numberOfTopics = 24;
const searchTopics = [];

// Handle radio button change event
const radioMobile = document.getElementById("radioMobile");
const radioPc = document.getElementById("radioPc");

radioMobile.addEventListener("change", function () {
  if (radioMobile.checked) {
    numberOfTopics = 24;
  }
});

radioPc.addEventListener("change", function () {
  if (radioPc.checked) {
    numberOfTopics = 30;
  }
});

document.getElementById("searchBtnPc").addEventListener("click", function () {
  searchTopics.length = 0; // Clear the previous topics
  const currentLength = parseInt(lengthSlider.value);
  const selectedNumberOfTopics = radioMobile.checked ? 24 : 30;
  for (let i = 0; i < selectedNumberOfTopics; i++) {
    searchTopics.push(generateRandomLetters(currentLength));
  }

  const questionsWithRandomStrings = questions
    .slice(0, selectedNumberOfTopics)
    .map((question, index) => question.replace(/x/g, searchTopics[index]));

  // console.log(questionsWithRandomStrings);

  openMultipleTabs(questionsWithRandomStrings);
});

// List of questions with 'x' to be replaced
const questions = [
  "What defines x's length?",
  "Why care about x?",
  "Uses of x?",
  "Meaning of x?",
  "Calculation of x?",
  "What is the mean of x?",
  "Why is this happening x?",
  "Why do we need this x?",
  "What does x signify?",
  "Why is x important?",
  "How do we calculate x?",
  "What can x represent?",
  "Why should we study x?",
  "What are the implications of x?",
  "How do we interpret x?",
  "Why is x relevant?",
  "What are the properties of x?",
  "How is x measured?",
  "Why is x a variable of interest?",
  "What are the potential values of x?",
  "How does x impact our understanding?",
  "Why might x be a key factor?",
  "What are the different forms of x?",
  "How can x be applied in practice?",
  "Why is x a subject of investigation?",
  "What are the potential effects of x?",
  "Why is x a topic of discussion?",
  "What can x reveal about a situation?",
  "How does x influence outcomes?",
  "Why is x a variable of concern?",
  // Add more questions here as needed
];
