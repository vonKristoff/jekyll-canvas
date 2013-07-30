require.config({
    
    paths: {
        jquery:     '../components/jquery/jquery', 
        underscore: '../components/underscore/underscore',
        creativejs: '../libs/creativejs',
        graphics:   '../libs/graphics',
        <%= grunt.file.readJSON('package.json').name %>:     'app',
        <%= grunt.file.readJSON('package.json').name + '_code' %>:       'pattern'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
});

require(['<%= grunt.file.readJSON('package.json').name %>','jquery','underscore'], function (App,$,_) {

    var app = new App(),
        id = '<%= grunt.file.readJSON('package.json').name %>',
        canvas = app.setup(id,600,400);

    $('.'+id).html(canvas);

})