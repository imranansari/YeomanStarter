// Set the require.js configuration for your application.
require.config({
    // Initialize the application with the main application file
    deps:["main"],

    paths:{
        // JavaScript folders
        libs:"vendor",
        plugins:"vendor/plugins",

        // Libraries
        jquery:"vendor/jquery.min" ,
        underscore:"vendor/lodash.min",
        backbone:"vendor/backbone-min",
        //backboneCollectionBinder:"vendor/Backbone.CollectionBinder",
        //backboneModelBinder:"vendor/Backbone.ModelBinder",
        handlebars:"vendor/handlebars.1.0.0.beta.3",
        iscroll:"vendor/iScroll",
        jscroll:"vendor/jScroll",
        listjs:"vendor/list.min"

    },

    shim:{
        underscore:{
            exports:"_"
        },
        backbone:{
            deps:["underscore", "jquery"],
            exports:"Backbone"
        },
        handlebars:{
            deps:["jquery"],
            exports:"Handlebars"
        },
        jscroll:{
            deps:["iscroll"],
            exports:"jScroll"
        },
        listjs:{
            exports:"List"
        }
/*        backboneModelBinder:{
            deps:["backbone","underscore"],
            exports: "BackboneModelBinder"
        },
        backboneCollectionBinder:{
            deps:["backbone", "backboneModelBinder"],
            exports: "BackboneCollectionBinder"
        }*/
    }
});
