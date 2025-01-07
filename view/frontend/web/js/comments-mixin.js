define([], function () {
    'use strict';

    $.mixinSuper('Amasty_Blog/js/amblog/comments', {
        commentsLoadedCallback: function () {
            this._super();
            $('.amblog-comments-container').trigger('contentUpdated');
        }
    });
});
