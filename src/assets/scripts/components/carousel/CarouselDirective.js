define(function(require) {
    'use strict';

    var ComponentModule = require('../ComponentModule');
    var CarouselTemplate = require('text!./CarouselTemplate.html');

    ComponentModule.directive('nrdCarousel', [
        '$window',
        function(
            $window
        ){
        return {
            template: CarouselTemplate,
            transclude: true,
            scope: {},
            link: function(scope, element, attrs) {

                /*
                 * Variables
                 *
                 * Numbers and initial references to selectors are stored
                 * in this section for reference later on in the function.
                 * There are three different groups of variables: selectors,
                 * numbers and state.
                 */
                var SELECTORS = {
                    $carousel: undefined,
                    $slideWrapper: undefined,
                    $slides: undefined
                };

                var NUMBERS = {
                    SLIDE_GUTTER: parseInt(attrs.slidegutter, 10),
                    SLIDE_COUNT: undefined,
                    WRAPPER_WIDTH: undefined,
                    SLIDE_WIDTH: undefined,
                    CAROUSEL_WIDTH: undefined
                };

                var STATE = {
                    CURRENT_SLIDE: 1,
                    OFFSET: NUMBERS.SLIDE_GUTTER,
                    RESIZE_OFFSET: undefined,
                    START: true,
                    END: false
                };

                /*
                 * Window resize
                 *
                 * Uses the reference to the $window servece passed into
                 * the directive to trigger a function when the window is
                 * resized.
                 */
                angular.element($window).bind('resize', function() {
                    scope.onResize();
                });

                /*
                 * Init
                 *
                 * Used to kick off the slider. Contains chained functions
                 */
                init();

                function init() {
                    createChildren();
                    setNumbers();
                    carouselStartPos();
                    setStyles();
                };

                /*
                 * Create Children
                 *
                 * Create the references to DOM element used in the component
                 */
                function createChildren() {
                    SELECTORS.$carousel     = element.find('.carousel-bd-slides');
                    SELECTORS.$slideWrapper = element.find('.carousel-bd-slides-container');
                    SELECTORS.$slides       = SELECTORS.$slideWrapper.children();

                    return this;
                };

                /*
                 * Set Numbers
                 *
                 * Use DOM elements to assign values to the properties on the
                 * NUMBERS object created in the Variables section
                 */
                function setNumbers() {
                    NUMBERS.CAROUSEL_WIDTH = SELECTORS.$carousel.width();
                    NUMBERS.SLIDE_WIDTH    = NUMBERS.CAROUSEL_WIDTH - (4 * NUMBERS.SLIDE_GUTTER);
                    NUMBERS.SLIDE_COUNT    = SELECTORS.$slides.length;
                    NUMBERS.WRAPPER_WIDTH  = (NUMBERS.SLIDE_WIDTH + NUMBERS.SLIDE_GUTTER) * NUMBERS.SLIDE_COUNT;
                    STATE.RESIZE_OFFSET    = (NUMBERS.SLIDE_WIDTH * (STATE.CURRENT_SLIDE - 1)) + (NUMBERS.SLIDE_GUTTER * (STATE.CURRENT_SLIDE - 1)) - NUMBERS.SLIDE_GUTTER;

                    return this;
                };

                /*
                 * Carousel Start Position
                 *
                 * Sets the initial offset of the slider container to an offset
                 * equal to that of the gutter between slides
                 */
                function carouselStartPos() {
                    SELECTORS.$slideWrapper.css('left', STATE.OFFSET + 'px');
                };

                /*
                 * Set Styles
                 *
                 * Any elements whose styles are Javascript dependent for proper inital
                 * layout will be styled with this function
                 */
                function setStyles() {
                    // Assign the proper width to the wrapper
                    SELECTORS.$slideWrapper.css('width', NUMBERS.WRAPPER_WIDTH + 'px');

                    // Loop through all the slides and assign their proper widths
                    var i = 0;

                    for(i; i < SELECTORS.$slides.length;i++) {
                        SELECTORS.$slides.css({
                            'width':  NUMBERS.SLIDE_WIDTH + 'px',
                            'margin-left': NUMBERS.SLIDE_GUTTER + 'px'
                        });
                    }

                    return this;
                };

                /*
                 * Shift Container
                 *
                 * This function is responsible for moving the slide container the
                 * proper number of pixels. This function accepts one argument, the
                 * distance that the container should be shifter to the left.
                 */
                function shiftContainer() {
                    SELECTORS.$slideWrapper.css('left', STATE.OFFSET + 'px');
                };

                /*
                 * Update Offset
                 *
                 * Function responsible for calculating the offset of that the container
                 * should be set to before the container is shifter. Accepts one argument,
                 * direction, which is either a boolean or undefined value. Undefined value
                 * for the argument occurs on window resize.
                 */
                function updateOffset(dir) {
                    var position = (NUMBERS.SLIDE_WIDTH + NUMBERS.SLIDE_GUTTER);

                    if (typeof dir === 'undefined') {
                        defineOffset();
                    }
                    else if(dir) {
                        STATE.OFFSET = STATE.OFFSET - position;
                    } else {
                        STATE.OFFSET = STATE.OFFSET + position;
                    }

                    return this;
                };

                /*
                 * Define Offset
                 *
                 * Called by Update Offset when the value of its argument is undefined,
                 * it is used to set the proper resize offset value depending on which
                 * slide is currently active. Because of the gutters between slides and
                 * the overlapping slides in the viewport this logic is necessary to proper
                 * resizing functionality
                 */
                function defineOffset() {
                    if(STATE.CURRENT_SLIDE > 1) {
                        STATE.OFFSET = -STATE.RESIZE_OFFSET;
                    } else {
                        STATE.OFFSET = STATE.OFFSET;
                    }
                };

                /*
                 * Slide
                 *
                 * This function is invoked by a user action in the DOM and is
                 * responsible for checking the state of the carousel and then
                 * calling then starting off the animation of the carousel
                 */
                scope.slide = function(dir) {

                    if (dir && STATE.CURRENT_SLIDE < NUMBERS.SLIDE_COUNT) {
                        STATE.CURRENT_SLIDE = STATE.CURRENT_SLIDE + 1;
                    } else if (!dir && STATE.CURRENT_SLIDE > 1) {
                        STATE.CURRENT_SLIDE = STATE.CURRENT_SLIDE - 1;
                    } else {
                        return;
                    }

                    updateOffset(dir);
                    shiftContainer();
                };

                /*
                 * onResize
                 *
                 * The function that is called when the window resizes.
                 * Is used to recalculate values and set new styles to
                 * achieve responsive layout
                 */
                scope.onResize = function() {
                    setNumbers();
                    setStyles();
                    updateOffset();
                    shiftContainer();
                };

            },
            controller: function($scope) {

            }
        };
    }]);
});