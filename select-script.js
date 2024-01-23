// Polyfill for NodeList forEach method
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    }
}

document.querySelectorAll('.select-wrapper').forEach(function (selectWrapper) {

    // Variables (enter clases here)
    const selectButton = selectWrapper.querySelector('.select-button');
    const selectList = selectWrapper.querySelector('.select-list');
    const selectOptions = selectList.querySelectorAll('.select-item');
    const selectInput = selectWrapper.querySelector('.select-input');
    const ctaButtons = document.querySelectorAll('.plan-cta');

    // Openining-closing select options list + holding focus state
    selectButton.addEventListener('click', function() {
        selectList.classList.toggle('select-list_visible');
        this.classList.add('select-button_active');
    });

    //  Pre-selection interactions + adding value to hidden input
    ctaButtons.forEach(function(option) {
        option.addEventListener('click', function() {
            document.querySelector('.select-button').innerText = this.dataset.value;
            selectInput.value = this.dataset.value;
        })
    })

    // Option list selection interactions + adding value to hidden input
    selectOptions.forEach(function(option) {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            selectButton.innerText = this.innerText;
            selectButton.focus();
            selectInput.value = this.dataset.value;
            selectList.classList.remove('select-list_visible');
        })
    }) 

    // Closing option list with clicking outside select
    document.addEventListener('click', function(e) {
        if (e.target !== selectButton) {
            selectButton.classList.remove('select-button_active');
            selectList.classList.remove('select-list_visible');
        }
    })

    // Closing option list with pressing "Tab" or "Escape" on keyboard
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            selectButton.classList.remove('select-button_active');
            selectList.classList.remove('select-list_visible');
        }
    })

});