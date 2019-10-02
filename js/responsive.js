$(function () {

    function resizeNavBar(height) {
        let top = $('#img').height();
        let navBar = $('#nav-bar');
        navBar.css('top', top);
        let newHeight = height - top - $('.toggle-nav').height() - 19;
        navBar.css('height', newHeight);
        $('.navs-link').css('height', newHeight / 5);
    }

    $('.toggle-nav-link').click( function (event) {
        event.preventDefault();
        $('.toggle-nav').toggleClass('visible');
        $('#nav-bar').toggleClass('visible');
        $('.content').toggleClass('visible');
    });
    let height = window.innerHeight;
    let width = window.innerWidth;

    if (width < 768 ) {
        resizeNavBar(height);
    }

    $(window).resize( function () {
        let height = window.innerHeight;
        let width = window.innerWidth;
        if (width < 768 ) {
            resizeNavBar(height);
        } else {
            $('#nav-bar').css('height', '');
            $('.navs-link').css('height', '');
        }
    })
});