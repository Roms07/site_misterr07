$(document).ready(function () {

	// Création de la "liste"
	$(function () {
		// Grab the template script
		let theTemplateScript = $("#screenpacks-template").html();

		// Compile the template
		let theTemplate = Handlebars.compile(theTemplateScript);

		// Define our data object
		$.getJSON("js/screenpacks.json", {data: "json"}, function (response) {
			// Pass our data to the template
			let theCompiledHtml = theTemplate(response);
			// Add the compiled html to the page
			$('#screenpacks').prepend(theCompiledHtml);
			let screenpackMixer = mixitup('#screenpacks');

			// We calculate the height of the video to keep the ratio 4/3 at the creation of the page
			resizeVideo($('.video-screenpack'));

			// Carousel with slick
			let mySwiper = new Swiper ('.swiper-container', {
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
			})
		});
	});

	// Same, but when the window is resize
	$(window).resize( function () {
		resizeVideo($('.video-screenpack'));
	});
});

function resizeVideo(video) {
	video.height(video.width()*3/4);
}
