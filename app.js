// All following
let allUsersArrayfollowing = [];

// function for select All  usersfollowing

function updateUsersFollowingArray() {
  // get folowwing Element

  let userLinksfollowing = document.querySelectorAll(
    'a[data-hovercard-type="user"]'
  );

  // create Array of name following

  let hrefValuesUsersfollowing = Array.from(userLinksfollowing).map((link) =>
    link.href.slice(19)
  );

  // create Array of link page following

  let hreflinkUsersfollowing = Array.from(userLinksfollowing).map(
    (link) => link.href
  );

  // remove Extra values ​​in the array
  let usersNamefollowing = [...new Set(hrefValuesUsersfollowing)];
  let userslinkfollowing = [...new Set(hreflinkUsersfollowing)];

  // create Array of Composition userName and link page following

  function createArrayusers(names, link) {
    let Arrayusers = [];

    for (let i = 0; i < names.length; i++) {
      let nameObj = { name: names[i], link: link[i] };
      Arrayusers.push(nameObj);
    }
    return Arrayusers;
  }

  // calling function ☝☝ and save it in New Array

  let newArrayusersfollowing = createArrayusers(
    usersNamefollowing,
    userslinkfollowing
  );

  // Adding previous and new information inside the Array allUsersArrayfollowing

  allUsersArrayfollowing = allUsersArrayfollowing.concat(
    newArrayusersfollowing
  );

  // return Array of following

  return allUsersArrayfollowing;
}

///////////////////////////////////////////////////followers//////////////////////////////////////
// All followers
let allUsersArrayfollowers = [];
// function for select All  usersfollowers
function updateUsersFollowersArray() {
  // get followers Element
  let userLinksfollowers = document.querySelectorAll(
    'a[data-hovercard-type="user"]'
  );

  // create Array of name followers
  let hrefValuesUsersfollowers = Array.from(userLinksfollowers).map((link) =>
    link.href.slice(19)
  );
  // create Array of link page followers

  let hreflinkUsersfollowers = Array.from(userLinksfollowers).map(
    (link) => link.href
  );

  // remove Extra values ​​in the array
  let usersNamefollowers = [...new Set(hrefValuesUsersfollowers)];
  let userslinkfollowers = [...new Set(hreflinkUsersfollowers)];

  // create Array of Composition userName and link page of followers
  function createArrayusers(names, link) {
    let Arrayusers = [];

    for (let i = 0; i < names.length; i++) {
      let nameObj = { name: names[i], link: link[i] };
      Arrayusers.push(nameObj);
    }
    return Arrayusers;
  }

  // calling function ☝☝ and save it in New Array
  let Arrayusersfollowers = createArrayusers(
    usersNamefollowers,
    userslinkfollowers
  );

  // Adding previous and new information inside the Array allUsersArrayfollowers

  allUsersArrayfollowers = allUsersArrayfollowers.concat(Arrayusersfollowers);

  // return Array of followers
  return allUsersArrayfollowers;
}

// function Compare and find those who follow you but they don't follow you back

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

//call and  Array of unfollower👍👌
let unfollower = compareArrays(allUsersArrayfollowers, allUsersArrayfollowing);
console.log(unfollower);
