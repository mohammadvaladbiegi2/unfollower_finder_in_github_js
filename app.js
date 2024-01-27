//  first code

// select All  usersfollowing
let userLinksfollowing = document.querySelectorAll(
  'a[data-hovercard-type="user"]'
);
// find user Namesfollowing
let hrefValuesUsersfollowing = Array.from(userLinksfollowing).map((link) =>
  link.href.slice(19)
);
// Remove additional namesfollowing
let usersNamefollowing = [...new Set(hrefValuesUsersfollowing)];

// create Array of name with acquired namesfollowing ☝☝
function createArrayusers(names) {
  let Arrayusers = [];

  for (let i = 0; i < names.length; i++) {
    let nameObj = { name: names[i] };
    Arrayusers.push(nameObj);
  }
  return Arrayusers;
}
// Array of following  users
let Arrayusersfollowing = createArrayusers(usersNamefollowing);
console.log("====================================");
console.log(Arrayusersfollowing);
console.log("====================================");
///////////////////
//////////////////
/////////////////
////////////////
///////////////
/////////////

// second code

// select All  usersfollowers
let userLinks = document.querySelectorAll('a[data-hovercard-type="user"]');
// find user Names
let hrefValuesUsers = Array.from(userLinks).map((link) => link.href.slice(19));
// Remove additional namesfollowers
let usersName = [...new Set(hrefValuesUsers)];

// create Array of name with acquired namesfollowers ☝☝
function createArrayusers(names) {
  let Arrayusers = [];

  for (let i = 0; i < names.length; i++) {
    let nameObj = { name: names[i] };
    Arrayusers.push(nameObj);
  }
  return Arrayusers;
}
// Array of following or followers usersfollowers
let Arrayusers = createArrayusers(usersName);

// find Those you follow but they don't follow you back
function compareArrays(followers, following) {
  let notFoundArray = [];

  for (let i = 0; i < following.length; i++) {
    let found = false;

    for (let j = 0; j < followers.length; j++) {
      if (following[i]["name"] === followers[j]["name"]) {
        found = true;
        break;
      }
    }

    if (!found) {
      notFoundArray.push(following[i]);
    }
  }

  return notFoundArray;
}

// Array of unfollower👍👌
let unfollower = compareArrays(Arrayusers, Arrayusersfollowing);
console.log(unfollower);
