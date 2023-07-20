//LOGIC FOR PC SEARCH
document.getElementById("searchBtnPc").addEventListener("click", function () {
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

  const numberOfTopics = 20;
  const searchTopics = [];

  for (let i = 0; i < numberOfTopics; i++) {
    searchTopics.push(generateRandomLetters(3));
  }
  console.log(searchTopics);

  openMultipleTabs(searchTopics);
});
