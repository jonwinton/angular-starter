/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
require([
    'angular',
    'angularTouch',
    'nerdery-auto-replace',
    'nerdery-external-links',
    'nerdery-has-js',
    'modernizr',

    // angular components
    'components/index'
], function (
    angular,
    angularTouch,
    AutoReplace,
    ExternalLinks,
    HasJS,
    Modernizr
) {
    'use strict';

    AutoReplace.init();
    ExternalLinks.init();
    HasJS.init();

    var applicationModule = angular.module(
        'app',
        [
            'ngTouch',
            'app.components'
        ]
    );

    angular.bootstrap(document, ['app']);
});