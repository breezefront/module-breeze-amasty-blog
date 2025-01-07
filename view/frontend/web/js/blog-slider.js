define([
    'jquery'
], function ($) {
    'use strict';

    $.widget('am.blogSlider', {
        options: {},
        classes: {
            loaded: '-am-loaded',
            slickInitialized: 'slick-initialized',
            sliderContainerClass: 'amblog-slider-container'
        },

        _create: function () {
            this._initSlider();
        },

        _initSlider: function () {
            var footerContainer = this.element.closest('.page-bottom');

            if (footerContainer.length) {
                footerContainer.addClass(this.classes.sliderContainerClass);
            }

            this.element
                .on('pagebuilderSlider:afterCreate', this._enableSlider.bind(this))
                .pagebuilderSlider(this.options);
        },

        _enableSlider: function () {
            this.element.addClass(this.classes.loaded);
        }
    });

    return $.am.blogSlider;
});
