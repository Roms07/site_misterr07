$(document).ready(function () {
    // Carousel with Swiper
    let projectSwiper = new Swiper('.swiper-container', {
        // Optional parameters
        speed: 500,
        effect: 'fade',
        grabCursor: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // We calculate the height of the video to keep the ratio 4/3 at the creation of the page
    resizeVideo($('.video-projet'));

    // Same, but when the window is resize
    $(window).resize( function () {
        resizeVideo($('.video-projet'));
    });
});

function resizeVideo(video) {
    video.height(video.width()*3/4);
}
