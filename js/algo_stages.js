
jQuery(document).ready(function ($) {
	$.getJSON('js/stages.json', function(stages) {
			$('#stages').html('');
			for (var i=0; i<stages.length; i++){
				$('#stages').append(
					'<div class="stage col-lg-3"><a href="'+stages[i].link +'">'
					+'<img class="img_stage"'
					+' src="' +stages[i].image 
					+'" alt='+stages[i].id +'></a></div>');
			}
		});
});