define('UI', ['jquery', 'handlebars'], function($, handlebars){
    'use strict';

    console.log('UI module started');

    var showTweetsList = function(tweets, success, error){
        var $list = $('#twitter-list');
        var listTpl = $('#list-tpl').html();
        var template = handlebars.compile(listTpl);
        var html = template({tweets:tweets});
        $list.html(html);
        success();
    };

    return{
        showTweetsList : showTweetsList
    };

});