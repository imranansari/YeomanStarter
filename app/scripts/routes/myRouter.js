define(["backbone", "app"], function (Backbone, App) {
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

});