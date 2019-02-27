
jQuery(document).ready(function ($) {
	$.getJSON('js/screenpacks.json', function(screenpacks) {
			$('#screenpacks').html('');
			for (var i=0; i<screenpacks.length; i++){
				$('#screenpacks').append(
					'<div class="screenpack container-fluid col-lg-6">'
						+'<div class=row>'
							+'<div class="col-lg-6">'						
								+'<img class="img_screenpack" src=' +screenpacks[i].image +' alt='+screenpacks[i].id +'>'
							+'</div>'
							+'<div class="col-lg-6">'						
								+'<p>' +screenpacks[i].description +'</p>'
							+'</div>'
						+'</div>'
						+'<a href="'+screenpacks[i].link +'"> Link</a>'
					+'</div>'
			)};
		});
});