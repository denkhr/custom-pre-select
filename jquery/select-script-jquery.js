$(document).ready(function () {

    $('.select-wrapper').each(function () {

        // Variables (enter classes here)
        const selectButton = $('.select-button');
        const selectList = $('.select-list');
        const selectOptions = $('.select-item');
        const selectInput = $('.select-input');
        const ctaButtons = $('.plan-cta');

        // Opening-closing select options list + holding focus state
        selectButton.on('click', function() {
            selectList.toggleClass('select-list_visible');
            $(this).toggleClass('select-button_active');
        });

        // Pre-selection interactions + adding value to hidden input
        ctaButtons.each(function () {
            $(this).on('click', function() {
                selectButton.text($(this).data('value'));
                selectInput.val($(this).data('value'));
            });
        });

        // Option list selection interactions + adding value to hidden input
        selectOptions.each(function () {
            $(this).on('click', function(e) {
                e.stopPropagation();
                selectButton.text($(this).text());
                selectButton.trigger('focus');
                selectInput.val($(this).data('value'));
                selectList.removeClass('select-list_visible');
            });
        });

        // Closing option list with clicking outside select
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.select-wrapper').length) {
                selectButton.removeClass('select-button_active');
                selectList.removeClass('select-list_visible');
            }
        });

        // Closing option list with pressing "Tab" or "Escape" on keyboard
        $(document).on('keydown', function(e) {
            if (e.which == 27 || e.which == 9) {
                selectButton.removeClass('select-button_active');
                selectList.removeClass('select-list_visible');
            }
        });

    });

});
