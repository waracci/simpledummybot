var Twit =require('twit');
var TwitterBot =require('node-twitterbot').TwitterBot;

var bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
})

var phraseArray = [
  "Don't cry because it's over, smile because it happened. -Dr. Seuss",
  "Be yourself; everyone else is already taken.- Oscar Wilde",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. -Albert Einstein",
  "So many books, so little time.-Frank Zappa",
  "A room without books is like a body without a soul. - Marcus Tullius Cicero",
  "Be the change that you wish to see in the world. Mahatma Gandhi",
  "If you tell the truth, you don't have to remember anything.- Mark Twain"
];

function chooseRandom(myArray){
  return myArray[(Math.floor(Math.random() * myArray.length))];
}

var phrase = chooseRandom(phraseArray);

Bot.tweet(phrase);