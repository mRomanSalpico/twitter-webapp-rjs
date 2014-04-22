/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            // pouchdb  : '../bower_components/pouchdb/dist/pouchdb-nightly',
            jquery: '../bower_components/jquery/dist/jquery',
            //'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev',
        },
        shim : {
            //'ydn-db': {
            //    exports : 'ydn'
            //}
        }
    });

    describe('Service module', function () {
        var srv;
        var $;

        beforeEach(function(done){
            require(['Service','jquery'], function(service,jquery){
                srv = service;
                $ = jquery;
                sinon.spy($,'ajax');
                done();
            });
        });
        afterEach(function(){
            $.ajax.restore();
        });

        describe('#getTweets', function () {
            it('$.ajax has been called',function (done){
                srv.getTweets();
                assert.isTrue($.ajax.calledOnce);
                done();
            });

            it('$.ajax con direccion buena',function (done){
                srv.getTweets();
                assert.equal($.ajax.firstCall.args[0].url,'/app/data/tweets.json');
                done();
            });

            it('Get all tweets from Twitter', function (done) {
                srv.getTweets({
                    apiKey : ''
                },function(tweets){
                    if (tweets && tweets.statuses && tweets.statuses.length >0){
                        assert.strictEqual(tweets.statuses.length, 100);
                        done();
                    } else{
                        throw "No se han obtenido los tweets";
                    }

                }, function(err){
                        throw err;
                });
            });
        });

    });
})();
