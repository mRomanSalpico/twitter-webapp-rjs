define('Data', ['pouchdb'], function(PouchDB) {
    console.log('Data module started');

    var db = new PouchDB('Twitter');

    var addTweet = function(tweet, callback, error) {
        db.put(tweet, function(err, response){
            if(err) {
                error(err);
            }

            callback(response);
        });
    };

    var clear = function(){
        
    };

    return {
        addTweet : addTweet,
        clear : clear
    };
});