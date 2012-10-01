require([
    // Libs
    "jquery",
    "backbone",

    //App
    "app"
],

    function ($, app) {

        Starter3.Routers.AppRouter = Backbone.Router.extend({
            routes:{
                "":"index",
                "search":"doSearch"
            },

            index:function () {
                console.log('default route');
                console.log('App name :' + Starter3.Constants.APPNAME);
            },

            doSearch:function() {
                console.log('do search');
            }
        });

        $(document).ready(function(){
            Starter3.init();

            var router = new Starter3.Routers.AppRouter();

            Backbone.history.start();
        });


    });
