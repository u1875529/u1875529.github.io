$(document).ready(function() {
    $('.image_trombi').hide();

    $('.titre').click(function() {
        $('.image_trombi').slideUp();
        $(this).next().slideToggle();
        return false;        
    });
});