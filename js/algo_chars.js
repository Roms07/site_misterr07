$(document).ready(function () {
    const values = ['name','link', 'sprite', 'description', 'image'];
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

        for (let i = 0; i < values.length; i++) {
            let goodInput = 'input[name=' +values[i] +']';
            char[values[i]] = $(this).find(goodInput).get(0).value;
        }

        if (width < 768) {
            $('#chars').removeClass('visible');
            $('#view').addClass('visible');
            $('.close-view').addClass('visible');
        }

       $('#view').html(
       '<div class="choice container-fluid">'
           +'<div class="row mt-3">'
               +'<div class="col-6 p-0">'
                    +'<img class="big-portrait" alt="" src=' +char.image + '>'
               +'</div>'
               +'<div class="col-6 text-center">'
                   +'<h3 class="name-char">'+char.name+'</h3>'
                   +'<img class="sprite" alt="Goku" src=' +char.sprite +'>'
                   +'<a target="_blank" class="link" href='+char.link +'>Telecharger</a>'
               +'</div>'
           +'</div>'
           +'<div class="row">'
                +'<p class="description">' +char["description"] +'</p>'
           +'</div>'
        +'</div>'
       );
    });

    $('.close-view').on('click', function (event) {
        event.preventDefault();
        $('#chars').addClass('visible');
        $('#view').removeClass('visible');
        $('.close-view').removeClass('visible');
    });
});