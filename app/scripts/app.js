define(["marionette", "handlebars"], function(Marionette, Handlebars) {

    window.Starter3 = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        init: function() {
            console.log('App init!');
        }
    };

    Starter3.Constants = {
        APPNAME: "LPL Viz"
    }


    //Overrides for Handlebars Templating
    Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
        // Marionette expects "templateId" to be the ID of a DOM element.
        // But with RequireJS, templateId is actually the full text of the template.
        var template = templateId;

        // Make sure we have a template before trying to compile it
        if (!template || template.length === 0){
            var msg = "Could not find template: '" + templateId + "'";
            var err = new Error(msg);
            err.name = "NoTemplateError";
            throw err;
        }

        return template;
    }

    Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
        return Handlebars.compile(rawTemplate);
    };
});