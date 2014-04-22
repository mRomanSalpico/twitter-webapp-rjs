define('Controller',['Data', 'Service'],function(DB,srv){
    'use strict';
    var getTweetsFromTwitter = function(){
        srv.getTweets({},processTweets, error);
    };
    var processTweets = function(data){
        var tweets=[];
        var tweet={};
        if(data && data.statuses && data.statuses.length >0){
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                tweet.id=data.statuses[i].id_str;
                tweet.text=data.statuses[i].text;
                tweet.data=new Date(data.statuses[i].created_at);
                tweet.name=data.statuses[i].user.name;

                tweets.push(tweet);

            }
            console.log(tweets);
            console.log(tweets.length);
            DB.addTweets(tweets);
        }

    };
    var error = function(){

    };

    return{
        getTweetsFromTwitter : getTweetsFromTwitter
    }
})