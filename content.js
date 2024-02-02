// All following
let allfollowing = [];

// function for select All  usersfollowing

function following() {
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

  // Adding previous and new information inside the Array allfollowing

  allfollowing = allfollowing.concat(newArrayusersfollowing);
  console.log(allfollowing);
  // cont_following.innerHTML = allfollowing.length;
  // return Array of following

  return allfollowing;
}

///////////////////////////////////////////////////followers//////////////////////////////////////
// All followers
let allfollowers = [];
// function for select All  usersfollowers
function followers() {
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

  // Adding previous and new information inside the Array allfollowers

  allfollowers = allfollowers.concat(Arrayusersfollowers);
  console.log(allfollowers);

  // return Array of followers
  return allfollowers;
}

// function Compare and find those who follow you but they don't follow you back

function find(followers, following) {
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

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getFollowing") {
    following();
    alert(
      "اگر فالووینگ بیشتر از 50 نفر داری \n برو صحفه بعد دوباره دکمه  following بزن \n اگر نه برو صحفه followers \n اگر همه کارها رو انجام دادی دکمه find بزن برای دیدن نتیجه"
    );
  } else if (request.action === "getFollowers") {
    followers();
    alert(
      "اگر فالوور بیشتر از 50 نفر داری \n برو صحفه بعد دوباره دکمه  following بزن \n اگر نه برو صحفه following \n اگر همه کارهارو انجام دادی دکمه find برای دیدن نتایج بزن"
    );
  } else if (request.action === "findUnfollowers") {
    let unfollowers = find(allfollowers, allfollowing);
    alert(unfollowers.map((user) => `\n name: ${user.name} \n`));
    alert("جزییات در لاگ صحفه 👇👇");
    console.log(unfollowers);
  }
});
