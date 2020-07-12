(function ($) {
	"use strict";

    $(document).ready(function($) {
        var videoModalClass = '.video-play-modal';

        $(videoModalClass).hide();

        $('.video-play-btn').on('click', function (ev) {
            var $btn, $parent, $modal, $iframe;

            ev.preventDefault();

            $btn = $(this);
            $parent = $btn.parent();
            $modal = $parent.siblings(videoModalClass);
            $modal.show();

            $iframe = $modal.find('.video-play-iframe');
            $iframe.attr('src', $iframe.attr('data-src'));

            $parent.siblings('.video-play-image').hide();
            $btn.hide();

        });

        updateBackgroundColor($('[role="tablist"] a.active'));

        $('[role="tablist"] a[role="tab"]').on('click', function () {
        	updateBackgroundColor($(this));
     	});

        function updateBackgroundColor($element) {
        	var bgColor = $element.attr('data-bg-color');
            if (bgColor) {
                $('.dark-bg').css('background-color', bgColor);
            }
        }
    });
}(jQuery));
