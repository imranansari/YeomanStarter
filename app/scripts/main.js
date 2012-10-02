define([
    // Libs
    "jquery",
    "backbone",
    "marionette",
    //App Modules
    "app",
    "models/myModel",
    //Templates
    "vendor/text!templates/main.html"
],
    function ($, Backbone, Marionette, App, MyModel, mainTpl) {

        Starter3.Routers.AppRouter = Backbone.Router.extend({
            routes:{
                "":"index",
                "search":"doSearch"
            },

            index:function () {
                console.log('default route');
                console.log('App name :' + Starter3.Constants.APPNAME);
            },

            doSearch:function () {
                console.log('do search');
            }
        });

        $(document).ready(function () {
            Starter3.init();

            var router = new Starter3.Routers.AppRouter();
            Backbone.history.start();

            //

            var MyView = Backbone.Marionette.ItemView.extend({
                template:mainTpl
            });

            var myModel = new Starter3.Models.MyModel({
                firstName:"Homer",
                lastName:"Simpson",
                email:"hsimpson@example.com"
            });

            // create the first view instance
            var myView = new MyView({
                model:myModel
            });

            myView.render();
            console.log(myView.el);
            myView.close();

        });

    });