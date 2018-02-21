# liri-node-app
LIRI (Language Interpretation and Recognition Interface) is a command line node app that takes in parameters and returns data.

## API's I'm obtaining data from:
* Twitter
* Spotify
* OMDB

## To get started:
* You'll need your own Twitter and Spotify API keys stored in an .env file
* You'll need npm packages for Twitter, Spotify, DotEnv and Request

## To run the app:
* To return my latest Tweets, type the following into the command line:

   node liri.js my-tweets

* To return data about a song, type the following into the command line:

   node liri.js spotify-this-song "name of song here"   

* Finally, to return data about a movie, type the following into command line:

   node liri.js movie-this "name of movie here" 
    

   