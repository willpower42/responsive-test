/*
 Version: 0.1.2a
  Author: Felipe Nunes
 Website: http://www.willpower.art.br
  github: http://willpowerart.github.io
*/

$(function() {
	$('#width').on('click', function() {
		$('#iphone,#tablet,#ipad').attr('height','500');
		$('.size-iphone').html('(320 x 500)');
		$('.size-tablet').html('(480 x 500)');
		$('.size-ipad').html('(768 x 500)');
	});
	$('#size').on('click', function() {
		$('#iphone').attr('height','480');
		$('#tablet').attr('height','640');
		$('#ipad').attr('height','1024');

		$('.size-iphone').html('(320 x 480)');
		$('.size-tablet').html('(480 x 640)');
		$('.size-ipad').html('(768 x 1024)');
	});
});

