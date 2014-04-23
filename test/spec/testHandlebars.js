/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            // pouchdb  : '../bower_components/pouchdb/dist/pouchdb-nightly',
            jquery: '../bower_components/jquery/dist/jquery',
            handlebars: '../bower_components/handlebars.js/dist/handlebars',
            //'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev',
        },
        shim : {
            handlebars: {
                exports: 'Handlebars'
            }

            //'ydn-db': {
            //    exports : 'ydn'
            //}
        }
    });

    describe('Handlebars module', function () {
        var ui;
        var $;
        var ctrl;
        var DB;

        beforeEach(function(done){
            require(['UI','jquery', 'Data'], function(UI,jquery, Data){
                ui = UI;
                $ = jquery;
                DB = Data;

                done();
            });
        });

        describe('#showTweetsList', function () {
            it('showTweetsList',function (done){
                ui.showTweetsList([{id:'1',text:'prueba1'},{id:'2',text:'prueba2'},{id:'3',text:'prueba3'},{id:'4',text:'prueba4'}]);
                assert.equal(4, $('#twitter-list').children().length);


                done();
            });
            it('showTweetsList de 100',function (done){

                var error = function(){
                };
                DB.getAllTweets(function(tweets){
                    ui.showTweetsList(tweets, function(){
                        assert.equal(100, $('#twitter-list').children().length);

                    }, error);
                },error);


                done();
            });

        });

    });
})();
