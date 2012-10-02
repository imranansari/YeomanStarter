define(["backbone", "app", "vendor/text!templates/main.html"], function (Backbone, App, mainTpl) {

    Starter3.Views.MyView = Backbone.Marionette.ItemView.extend({
        template:mainTpl,
        el:"#mainView",

        events: {
            'click': "closeView"
        },

        closeView:function(){
            this.close();
        }
    });
});