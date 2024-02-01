// popup.js

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".following_btn")
    .addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getFollowing" });
      });
    });

  document
    .querySelector(".followers_btn")
    .addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getFollowers" });
      });
    });

  document.querySelector(".find_btn").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "findUnfollowers" });
    });
  });
});
