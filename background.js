/*
__ __    ___  _      _       ___  
|  |  |  /  _]| |    | |     /   \ 
|  |  | /  [_ | |    | |    |     |
|  _  ||    _]| |___ | |___ |  O  |
|  |  ||   [_ |     ||     ||     |
|  |  ||     ||     ||     ||     |
|__|__||_____||_____||_____| \___/ 
*/


chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    var currentURL = "";
    var googleSearchSTR = "";
    var patt = "";
    currentURL = details.url;
    googleSearchSTR = "https://www.google.ca/search?q=r%2F";
    patt = /(?<==r%2F)(.*?)(?=&|$)/g;

    var subreddit = patt.exec(currentURL);

    chrome.tabs.update(null, {
        url: "https://www.reddit.com/r/" + subreddit[0]
    });

});