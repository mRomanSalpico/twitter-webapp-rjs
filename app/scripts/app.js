define(['Controller'], function(Controller) {
  console.log('App started');

  Controller.getTweetsFromTwitter();

  Controller.showLatestTweets();
});