require("dotenv").config();
const keys = require("./keys.js");
const request = require("request");
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const fs = require("fs");

const client = new Twitter(keys.twitter);
const spotify = new Spotify(keys.spotify);
  //console.log(client);

//var liriSays = process.argv; //an attribute on an object
  //console.log(liriSays);

var userFunction = process.argv[2];
  //console.log(userFunction);

//----------TWITTER--------------------------
switch (userFunction) {
  case "my-tweets":
  myTweets();
  break;
default:
  console.log("not a valid format, ask for 'my-tweets'");
}
// still need them to show when they were created.
//this is a function, only call in the case of 'my-tweets'
function myTweets(){
  if (userFunction === "my-tweets"){
  var params = {screen_name: 'ClicketyClyde', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log("These are your last 20 tweets: ");
        tweets.forEach(p => console.log(`@${p.user.screen_name}: ${p.text} @ ${p.created_at}`));
      }
    });
  }

//--------------SPOTIFY----------------------------
// need a command for 'spotify-this-song'
// node liri.js spotify-this-song '<song name here>'
// command will display 4 properties
// if no song is provided then have a default song
