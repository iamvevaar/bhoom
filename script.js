//Function for toggling between the dark and light theme
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
  for (let i = 0; i < numberOfTopics; i++) {
    searchTopics.push(generateRandomLetters(currentLength));
  }
  console.log(searchTopics);

  openMultipleTabs(searchTopics);
});
