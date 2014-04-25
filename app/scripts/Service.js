define('Service',['quo'],function($){

    var getTweets = function(config, success, error){
        $.ajax({
            url : '/app/data/tweets.json', //desde la raiz que ahora es twitter.webapp en el navegador
            dataType:'json',
            success : success,
            error : error

        });
    };

    return {
        getTweets:getTweets
    };
});