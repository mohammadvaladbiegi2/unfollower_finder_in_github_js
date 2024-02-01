chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension installed.");
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "findUnfollowers") {
    following();
    followers();
    let unfollowers = find(allfollowers, allfollowing);
    // Do something with the unfollowers, like displaying them in the popup
    console.log(unfollowers);
  }
});
