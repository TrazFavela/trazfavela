(function ($) {
	"use strict";

    $(document).ready(function($) {

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