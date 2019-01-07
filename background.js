/*
__ __    ___  _      _       ___  
|  |  |  /  _]| |    | |     /   \ 
|  |  | /  [_ | |    | |    |     |
|  _  ||    _]| |___ | |___ |  O  |
|  |  ||   [_ |     ||     ||     |
|  |  ||     ||     ||     ||     |
|__|__||_____||_____||_____| \___/ 
- Ronnie 
*/

// Listen for the browsers navigation event
chrome.webNavigation.onBeforeNavigate.addListener(details => {
  // get the current URL to check
  // if the user wants to navigate to a subreddit
  var currentURL = "";
  var googleSearchURL = "";
  var regexPattern = "";
  currentURL = details.url;

  googleSearchURL = "https://www.google.ca/search?q=r%2F";

  //using regex, check if the URL contains r/ (r%2F) then grab the string between the r/ and & sign

  regexPattern = /(?<==r%2F)(.*?)(?=&|$)/g;

  var subreddit = patt.exec(currentURL);

  chrome.tabs.update(null, {
    url: "https://www.reddit.com/r/" + subreddit[0]
  });
});
