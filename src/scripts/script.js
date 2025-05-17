// Array of welcome messages
const messages = [
   "Enzo is NOT a Admin",
   "Above is chill",
   "Star all of snowcloudsx github repos",
   "C++ is better",
   "How to rice chromeOS",
   "Linux is better"
  ];

  
  // Choose a random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  // Display it on the page
  document.getElementById('test').textContent = randomMessage;
  