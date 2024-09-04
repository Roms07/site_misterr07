$(document).ready(function () {

	// Création de la "liste"
	$(function () {
		// Grab the template script
		let theTemplateScript = $("#stages-template").html();

		// Compile the template
		let theTemplate = Handlebars.compile(theTemplateScript);

		// Define our data object
		$.getJSON("js/stages.json?v=3", {data: "json"}, function (response) {
			// Pass our data to the template
			let theCompiledHtml = theTemplate(response);
			// Add the compiled html to the page
			$('#stages').prepend(theCompiledHtml);
			let newMixer = mixitup('#stages');
		});
	});
});