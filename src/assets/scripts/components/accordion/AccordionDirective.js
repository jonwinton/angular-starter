define(function(require) {
    'use strict';

    var ComponentModule = require('../ComponentModule');
    var AccordionController = require('./AccordionController');

    ComponentModule.directive('nrdAccordion', function($log) {
        return {
            restrict: 'A',
            scope: true,

            link: function(scope, element, attrs) {

                if (typeof attrs.notseparated !== 'undefined') {
                    element.find('.accordion').addClass('accordion_notSeparated');
                }

                if (typeof attrs.separated !== 'undefined') {
                    element.find('.accordion').addClass('accordion_separated');
                }

                if (typeof attrs.cta !== 'undefined') {
                    element.find('.accordion-item-hd').addClass('accordion-item-hd_cta');
                    element.find('.accordion-item-bd').addClass('accordion-item-bd_cta');
                }

                if (typeof attrs.minheight !== 'undefined') {
                    element.find('.accordion-item-hd').addClass('accordion-item-hd_minHeight');
                }

            },
            controller: 'AccordionCtrl'
        };
    });
});