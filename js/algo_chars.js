
$(document).ready(function () {
	let chars = [];
	// Création de la "liste" de questions
	$(function () {
		// Grab the template script
		let theTemplateScript = $("#chars-template").html();

		// Compile the template
		let theTemplate = Handlebars.compile(theTemplateScript);

		// Define our data object
		$.getJSON("js/chars.json", {data: "json"}, function (response) {
			console.log("toto");
			// Pass our data to the template
			let theCompiledHtml = theTemplate(response);
			// Add the compiled html to the page
			$('#chars').prepend(theCompiledHtml);

		});
	});

});