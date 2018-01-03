console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var params = {
	 q: 'banana',
	 count: 5
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
}
var tweet = {
	status: 'hello world!'	
}

T.post('statuses/update', tweet, doTweet)

function doTweet(err, data, response){
	if(err) {
		console.log('something went wrong');
	} else {
		console.log('it worked');
	}
}