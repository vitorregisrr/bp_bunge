(function () {
    'use strict';

    $('[data-toggle="mobile-nav"]').click(function () {
        $('#mobile-nav').toggleClass('active');
        $('#mobile-nav').attr('aria-hidden', $('#mobile-nav').attr('aria-hidden') === "true" ? false : true);
    });
    
    $('#mobile-nav li a').click(function () {
        $('#mobile-nav').removeClass('active');
        $('#mobile-nav').attr('aria-hidden', true);
    });

})();