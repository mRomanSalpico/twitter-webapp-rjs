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

        beforeEach(function(done){
            require(['jquery'], function(jquery){
                $ = jquery;
                done();
            });
        });

        describe('#showLatestTweets', function () {

            it('#Event datachange is fired',function (done){
                var errTimeout = setTimeout(function(){
                    assert(false, 'Event never fired');
                    console.log('todavia no se ha lanzado el datachange');
                    done();
                }, 1000);

                $(document).on('datachange', function(){
                    clearTimeout(errTimeout);
                    assert(true);
                    console.log('se ha lanzado el datachange');
                    done();
                });
                document.dispatchEvent(new Event('datachange'));

            });


        });


    });
})();
