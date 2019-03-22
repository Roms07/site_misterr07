$(document).ready(function () {
    const values = ['link', 'sprite', 'description', 'image'];
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
        });
    });

    $('#chars').on('click', '.perso', function () {
        let char = [];
        for (let i = 0; i < values.length; i++) {
            let goodInput = 'input[name=' +values[i] +']';
            char[values[i]] = $(this).find(goodInput).get(0).value;
        }
console.log(char);
       $('#view').html(
       '<div class="choice container-fluid">'
           +'<div class="row mt-3">'
               +'<div class="col-lg-6">'
                    +'<img class="big-portrait" alt="" src=' +char.image + '>'
               +'</div>'
               +'<div class="col-lg-6">'
                   +'<h3 class="name-char mt-4">Goku</h3>'
                   +'<a href='+char.link +'><button class="link mt-5">Telecharger</button></a>'
               +'</div>'
           +'</div>'
           +'<div class="row mt-4">'
                +'<img class="sprite mt-3" alt="Goku" src=' +char.sprite +'>'
                +'<p class="description">' +char["description"] +'</p>'
           +'</div>'
        +'</div>'
       );
    })
});