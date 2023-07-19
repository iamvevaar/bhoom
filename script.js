//LOGIC FOR PC SEARCH 
document.getElementById('searchBtnPc').addEventListener('click', function() {
    // Function to generate a random string of letters
    function generateRandomLetters(length) {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      let randomString = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomString += letters.charAt(randomIndex);
      }
      return randomString;
    }
  
    // Function to open multiple search tabs
    function openMultipleTabs(topics) {
      topics.forEach(function(topic) {
        const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(topic)}`;
        window.open(searchUrl , "_blank");
      });
    }
  
    // Generate a random topic (3 characters)
    const topic1 = generateRandomLetters(3);
    const topic2 = generateRandomLetters(3);
    const topic3 = generateRandomLetters(3);
    const topic4 = generateRandomLetters(3);
    const topic5 = generateRandomLetters(3);
    const topic6 = generateRandomLetters(3);
    const topic7 = generateRandomLetters(3);
    const topic8 = generateRandomLetters(3);
    const topic9 = generateRandomLetters(3);
    const topic10 = generateRandomLetters(3);
    const topic11 = generateRandomLetters(3);
    const topic12 = generateRandomLetters(3);
    const topic13 = generateRandomLetters(3);
    const topic14 = generateRandomLetters(3);
    const topic15 = generateRandomLetters(3);
    const topic16 = generateRandomLetters(3);
    const topic17 = generateRandomLetters(3);
    const topic18 = generateRandomLetters(3);
    const topic19 = generateRandomLetters(3);
    const topic20 = generateRandomLetters(3);
    
    // Open the search URLs in multiple tabs
    const searchTopics = [topic1, topic2, topic3,topic4, topic5, topic6,topic7, topic8, topic9,topic10, topic11, topic12,topic13, topic14, topic15,topic16, topic17, topic18,topic19, topic20];
    openMultipleTabs(searchTopics);
    
  });



  // LOGIC FOR MOBILE SEARCH

  // document.getElementById('searchBtnMobile').addEventListener('click', function() {
  //   // Function to generate a random string of letters
  //   function generateRandomLetters(length) {
  //     const letters = 'abcdefghijklmnopqrstuvwxyz';
  //     let randomString = '';
  //     for (let i = 0; i < length; i++) {
  //       const randomIndex = Math.floor(Math.random() * letters.length);
  //       randomString += letters.charAt(randomIndex);
  //     }
  //     return randomString;
  //   }
  
  //   // Function to open multiple search tabs
  //   function openMultipleTabs(topics) {
  //     topics.forEach(function(topic) {
  //       const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(topic)}`;
  //       window.open(searchUrl , "_blank");
  //     });
  //   }
  
  //   // Generate a random topic (3 characters)
  //   const topic1 = generateRandomLetters(3);
  //   const topic2 = generateRandomLetters(3);
  //   const topic3 = generateRandomLetters(3);
  
  //   // Open the search URLs in multiple tabs
  //   const searchTopics = [topic1, topic2, topic3];
  //   openMultipleTabs(searchTopics);


    
  // });






