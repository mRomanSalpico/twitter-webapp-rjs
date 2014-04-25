define('Events', ['jquery', 'Controller'], function($, Controller){
    'use strict';

    $(document).on('data-change', Controller.showLatestTweets);
});