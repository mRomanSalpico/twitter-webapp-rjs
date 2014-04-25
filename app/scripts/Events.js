define('Events', ['quo', 'Controller'], function($, Controller){
    'use strict';

    $(document).on('data-change', Controller.showLatestTweets);
});