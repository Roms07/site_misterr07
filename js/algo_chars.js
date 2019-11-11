$(document).ready(function () {
    const values = ['name','link', 'sprite', 'description', 'images', 'update'];
    // Création de la "liste"
    $(function () {
        // Grab the template script
        let theTemplateScript = $("#chars-template").html();

        // Compile the template
        let theTemplate = Handlebars.compile(theTemplateScript);

        // Define our data object
        $.getJSON("js/chars.json", {data: "json"}, function (response) {
            // Pass our data to the template
            let theCompiledHtml = theTemplate(response);
            // Add the compiled html to the page
            $('#chars').prepend(theCompiledHtml);
            let mixer = mixitup('#chars');
        });
    });

    $('#chars').on('click', '.perso', function () {
        let char = [];
        let width = window.innerWidth;

        $('#view').addClass('visible');
        $('#message').removeClass('visible');

        for (let i = 0; i < values.length; i++) {
            let goodInput = 'input[name=' +values[i] +']';
            char[values[i]] = $(this).find(goodInput).get(0).value;
        }

        // We create the carousel
        let images = char.images.split(',');
        let htmlImages = '';
        for (let i =0; i < images.length; i++) {
            htmlImages += '<div class="swiper-slide">'
                +'<img src="'+images[i] +'" alt="img-'+i +'" class="carousel-img">'
                +'</div>';
        }

        // Calculate Max Width for Carousel
        // let carouselMaxWidth = Math.max(.7*$('.choice').width() , 322);
        let carouselMaxWidth = .725*$('.choice').width();
        if (width < 768) {
            $('#chars').removeClass('visible');
            $('#view').addClass('visible');
            $('.close-view').addClass('visible');
            carouselMaxWidth = width*(.6 +.25*(width < 576));
        }

        $('.choice').html(
           '<h3 class="name-char">'+char.name+'</h3>'
           +'<div class="row mt-3">'
               +'<div class="col-sm-8 col-12 pr-0 pl-0">'
                    +'<div class="swiper-container carousel-perso">'
                        +'<div class="swiper-wrapper">'+htmlImages+'</div>'
                        +'<div class="swiper-button-prev"></div>'
                        +'<div class="swiper-button-next"></div>'
                        +'<div class="swiper-pagination"></div>'
                    +'</div>'
               +'</div>'
               +'<div class="col-sm-4 col-12 text-center pr-0">'
                   +'<div><img class="sprite" alt="Goku" src=' +char.sprite +'></div>'
                   +'<a target="_blank" class="link" href='+char.link +'>Telecharger</a>'
                   +'<p class="update description">Maj : &nbsp;'+char.update+'</p>'
               +'</div>'
           +'</div>'
           +'<div class="row">'
                +'<p class="char-infos description">' +char["description"] +'</p>'
           +'</div>'
        );

        $('.carousel-perso').width(carouselMaxWidth);

        // Carousel with Swiper
        let charSwiper = new Swiper('.swiper-container', {
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
    });

    $('.close-view').on('click', function (event) {
        event.preventDefault();
        $('#chars').addClass('visible');
        $('#view').removeClass('visible');
        $('.close-view').removeClass('visible');
    });
});