define(function(require) {
    'use strict';

    var ComponentModule = require('../ComponentModule');

    ComponentModule.controller('AccordionCtrl', [
        '$scope',
        function(
            $scope
        ) {

            $scope.currentItem = '';

            this.toggle = function(name) {
                if (name === $scope.currentItem) {
                    name = '';
                }
                $scope.currentItem = name;
            };
    }]);
});