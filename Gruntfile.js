module.exports = function (grunt) {
    var historyApiFallbackMiddleware = require('connect-history-api-fallback');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    keepalive: true,
                    base: 'public',
                    middleware: function(connect, options, middleware) {
                        middleware.unshift(historyApiFallbackMiddleware());
                        return middleware;
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

};