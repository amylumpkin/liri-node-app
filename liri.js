require("dotenv").config();
const keys = require("./keys.js"); //
const request = require("request");
const Twitter = require("twitter");
let fs = require("fs");

const client = new Twitter(keys.twitter);
  //console.log(client);

var liriSays = process.argv; //an attribute on an object
  //console.log(liriSays);

var userFunction = process.argv[2];
  //console.log(userFunction);

switch (userFunction) {
  case "my-tweets":
  myTweets();
  break;
default:
  console.log("not valid, ask for my-tweets");
}

//this is a function, only call in the case of my-tweets
function myTweets(){
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    //for loop here for 20 indexes.
    console.log(tweets);

  }
});
}
//need to go through 20 indexes of the tweets array , and for each object console log the created_at and the text/body.

//command: node liri.js my-tweets
//show last 20 tweets
//return either error or request
