require("dotenv").config();
const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const request = require('request');
const fs = require('fs');

const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter)

let userFunction = process.argv[2];
let userFunction3 = process.argv[3];

// -----------------  TWITTER  ----------------------------

if (userFunction === "my-tweets"){
  var params = {screen_name: 'ClicketyClyde', count:20};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log("Your last 20 tweets: ");
      tweets.forEach(p => console.log(`@${p.user.screen_name}: ${p.text} @ ${p.created_at}`));
    }
  });
}


//---------------------  SPOTIFY ------------------------------

if (userFunction === "spotify-this-song"){
  if (userFunction3 === undefined) {
    console.log("We'll choose a song for you!")
    userFunction3 = "The Sign";
  };
  spotify.search({ type:'track', query: userFunction3, market:"us", limit:1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
    console.log(JSON.stringify(data.tracks.items[0].name, null, 2));
    console.log(JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 2));
    console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));
  });
}

//-----------------------  OMDB ------------------------------------

if (userFunction === "movie-this"){
if (userFunction === "Mr. Nobody") {
    //userFunction3 = "Mr. Nobody";
  }

    request(`http://www.omdbapi.com/?t=${userFunction3}&apikey=trilogy`, function (err, response, body) {
        console.log(JSON.parse(body).Ratings.length);
        if (!err && response.statusCode === 200) {
              console.log(`${userFunction3} info:
              Title: ${JSON.parse(body).Title}
              year: ${JSON.parse(body).Year}
              IMDB Rating: ${JSON.parse(body).imdbRating}
              Country: ${JSON.parse(body).Country}
              Language: ${JSON.parse(body).Language}
              Plot: ${JSON.parse(body).Plot}
              Actors: ${JSON.parse(body).Actors}  `);
        };
     })
}

// ------------------ DO WHAT IT SAYS -----------------------------
