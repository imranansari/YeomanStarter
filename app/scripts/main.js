define([
    // Libs
    "jquery",
    "backbone",
    "marionette",
    //App Modules
    "app",
    "models/myModel",
    "views/myView",
    "routes/myRouter",
],
    function ($, Backbone, Marionette, App, MyModel, MyView, MyRouter) {

        $(document).ready(function () {
            Starter3.init();

            var router = new Starter3.Routers.AppRouter();
            Backbone.history.start();

            //Create Model

            var myModel = new Starter3.Models.MyModel({
                firstName:"Homer",
                lastName:"Simpson",
                email:"hsimpson@example.com"
            });

            // create the first view instance
            var myView = new Starter3.Views.MyView({
                model:myModel
            });

            myView.render();
            console.log(myView.el);
            //myView.close();

        });

    });