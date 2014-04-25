/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            // pouchdb  : '../bower_components/pouchdb/dist/pouchdb-nightly',
            jquery: '../bower_components/jquery/dist/jquery',
            //handlebars: '../bower_components/handlebars.js/dist/handlebars',
            //'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev',
        },
         //'ydn-db': {
            //    exports : 'ydn'
            //}

    });

    describe('Events module', function () {
        var $;
        var srv;
        var DB;
        var ui;
        var ctrl;


        beforeEach(function(done){
            require(['UI','jquery', 'Data', 'Controller'], function(UI,jquery, Data, Controller){
                ui = UI;
                $ = jquery;
                DB = Data;
                ctrl = Controller;

                sinon.spy(ui,'showTweetsList');
                done();
            });
        });

        describe('#showLatestTweets', function () {

            it('#Event datachange is fired',function (done){
                var errTimeout = setTimeout(function(){
                    assert(false, 'Event never fired');
                    done();
                }, 1000);

                $(document).on('datachange', function(){
                    clearTimeout(errTimeout);
                    assert(true);
                    done();
                });
                document.dispatchEvent(new Event('datachange'));

            });


        });


    });
})();
