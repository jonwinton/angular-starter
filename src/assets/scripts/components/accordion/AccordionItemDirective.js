define(function(require) {
    'use strict';

    var ComponentModule = require('../ComponentModule');
    var AccordionController = require('./AccordionController');
    var AccordionItemTemplate = require('text!./AccordionItemTemplate.html');

    ComponentModule.directive('nrdAccordionItem', function($log) {
        return {
            restrict: 'A',
            scope: {
                title: '@nrdAccordionItem',
                trigger: '='
            },
            require: '^nrdAccordion',
            replace: true,
            transclude: true,
            template: AccordionItemTemplate,

            link: function(scope, element, attrs, accordionController) {
                scope.isOpen = false;

                function toggleAccordionItem() {
                    accordionController.toggle(scope.title);
                }

                scope.toggle = toggleAccordionItem;

                if (typeof attrs.separated !== 'undefined') {
                    scope.separated = true;
                }

                if (typeof attrs.transparent !== 'undefined') {
                    scope.transparent = true;
                }

                scope.$watch('trigger', function(newValue) {
                    if (newValue === scope.title) {
                        scope.isOpen = true;
                    } else {
                        scope.isOpen = false;
                    }
                });
            }
        };
    });
});