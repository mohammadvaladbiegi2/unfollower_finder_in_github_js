//  first code

// select All  usersfollowing
let userLinksfollowing = document.querySelectorAll(
  'a[data-hovercard-type="user"]'
);
// find user Names
let hrefValuesUsersfollowing = Array.from(userLinksfollowing).map((link) =>
  link.href.slice(19)
);
let hreflinkUsersfollowing = Array.from(userLinksfollowing).map(
  (link) => link.href
);

// Remove additional namesfollowing
let usersNamefollowing = [...new Set(hrefValuesUsersfollowing)];
let userslinkfollowing = [...new Set(hreflinkUsersfollowing)];

// create Array of name with acquired namesfollowing ☝☝
function createArrayusers(names, link) {
  let Arrayusers = [];

  for (let i = 0; i < names.length; i++) {
    let nameObj = { name: names[i], link: link[i] };
    Arrayusers.push(nameObj);
  }
  return Arrayusers;
}
// Array of following or following usersfollowing
let Arrayusersfollowing = createArrayusers(
  usersNamefollowing,
  userslinkfollowing
);
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
let userLinksfollowers = document.querySelectorAll(
  'a[data-hovercard-type="user"]'
);
// find user Names
let hrefValuesUsersfollowers = Array.from(userLinksfollowers).map((link) =>
  link.href.slice(19)
);
let hreflinkUsersfollowers = Array.from(userLinksfollowers).map(
  (link) => link.href
);

// Remove additional namesfollowers
let usersNamefollowers = [...new Set(hrefValuesUsersfollowers)];
let userslinkfollowers = [...new Set(hreflinkUsersfollowers)];

// create Array of name with acquired namesfollowers ☝☝
function createArrayusers(names, link) {
  let Arrayusers = [];

  for (let i = 0; i < names.length; i++) {
    let nameObj = { name: names[i], link: link[i] };
    Arrayusers.push(nameObj);
  }
  return Arrayusers;
}
// Array of following or followers usersfollowers
let Arrayusersfollowers = createArrayusers(
  usersNamefollowers,
  userslinkfollowers
);
console.log("====================================");
console.log(Arrayusersfollowers);
console.log("====================================");

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
let unfollower = compareArrays(Arrayusersfollowers, Arrayusersfollowing);
console.log(unfollower);
