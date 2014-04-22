/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            // pouchdb  : '../bower_components/pouchdb/dist/pouchdb-nightly',
            //jquery: '../bower_components/jquery/dist/jquery',
            //'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev',
        },
        shim : {
            //'ydn-db': {
            //    exports : 'ydn'
            //}
        }
    });

    describe('Controller module', function () {
        var ctrl;
        var srv;
        var DB;

        beforeEach(function(done){
            require(['Controller','Service','Data'], function(Controller, Service, Data){
                ctrl = Controller;
                srv = Service;
                DB = Data;
                sinon.spy(srv,'getTweets');
                sinon.spy(Data,'addTweets');
                done();
            });
        });

        describe('#getTweetsFromTwitter', function () {
            it('Get all tweets from Twitter and save to DB',function (done){
                ctrl.getTweetsFromTwitter();
                assert.isTrue(srv.getTweets.calledOnce,'getTweets');
                assert.isTrue(DB.addTweets.calledOnce,'addTweets');
                done();
            });

        });

    });
})();
