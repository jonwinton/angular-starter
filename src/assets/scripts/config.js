/**
 * Application configuration declaration.
 *
 * This configuration file is shared between the website and the build script so
 * that values don't have to be duplicated across environments. Any non-shared,
 * environment-specific configuration should placed in appropriate configuration
 * files.
 *
 * Paths to vendor libraries may be added here to provide short aliases to
 * otherwise long and arbitrary paths. If you're using bower to manage vendor
 * scripts, running `grunt install` will automatically add paths aliases as
 * needed.
 *
 * @example
 *     paths: {
 *         'jquery': '../vendor/jquery/jquery',
 *         'jquery-cookie': '../vendor/jquery-cookie/jquery-cookie'
 *     }
 *
 * Shims provide a means of managing dependencies for non-modular, or non-AMD
 * scripts. For example, jQuery UI depends on jQuery, but it assumes jQuery is
 * available globally. Because RequireJS loads scripts asynchronously, jQuery
 * may or may not be available which will cause a runtime error. Shims solve
 * this problem.
 *
 * @example
 *     shim: {
 *         'jquery-cookie': {
 *             deps: ['jquery'],
 *             exports: null
 *          }
 *     }
 *
 */
require.config({
    paths: {
        requirejs: '../vendor/requirejs/require',
        jquery: '../vendor/jquery/jquery',
        less: '../vendor/less/dist/less-1.7.0',
        modernizr: '../vendor/modernizr/modernizr',
        'nerdery-auto-replace': '../vendor/nerdery-auto-replace/index',
        'nerdery-external-links': '../vendor/nerdery-external-links/index',
        'nerdery-function-bind': '../vendor/nerdery-function-bind/index',
        'nerdery-has-js': '../vendor/nerdery-has-js/index',
        angular: '../vendor/angular/angular',
        angularTouch: '../vendor/angular-touch/angular-touch',
        globalVars: '../data/globalVars',
        handlebars: '../vendor/handlebars/handlebars',
        hbs: '../vendor/hbs/hbs',
        templates: '../../templates',
        data: '../data',
        text: '../vendor/requirejs-plugins/lib/text',
        'angular-touch': '../vendor/angular-touch/angular-touch',
        fontawesome: '../vendor/fontawesome/fonts/*',
        async: '../vendor/requirejs-plugins/src/async',
        depend: '../vendor/requirejs-plugins/src/depend',
        font: '../vendor/requirejs-plugins/src/font',
        goog: '../vendor/requirejs-plugins/src/goog',
        image: '../vendor/requirejs-plugins/src/image',
        json: '../vendor/requirejs-plugins/src/json',
        mdown: '../vendor/requirejs-plugins/src/mdown',
        noext: '../vendor/requirejs-plugins/src/noext',
        propertyParser: '../vendor/requirejs-plugins/src/propertyParser',
        'Markdown.Converter': '../vendor/requirejs-plugins/lib/Markdown.Converter'
    },
    shim: {
        modernizr: {
            exports: 'Modernizr'
        },
        angular: {
            deps: [
                'jquery'
            ],
            exports: 'angular'
        },
        angularTouch: {
            deps: [
                'angular'
            ],
            exports: 'ngTouch'
        }
    },
    hbs: {
        helpers: true,
        i18n: false,
        templateExtension: 'html',
        partialsUrl: ''
    },
    waitSeconds: 120,
    packages: [

    ]
});
