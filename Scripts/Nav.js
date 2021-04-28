$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.menu-links').toggleClass('d-block')
	});
	$('.menu-links').hover(function() {
		
	})
	$(window).scroll(function(e){ 
		var $el = $('.nav-links');
		var isPositionFixed = ($el.css('position') == 'fixed');
		if ($(this).scrollTop() > 45 && !isPositionFixed){ 
			$el.css({'position': 'fixed', 'top': '0px', 'width': '100%'}); 
			$('#space').css({'display': 'block', 'height' : `${$el.css('height')}`})
		}
		if ($(this).scrollTop() < 45 && isPositionFixed){
			$el.css({'position': 'static', 'top': '0px'}); 
			$('#space').css({'display': 'none', 'height': '0px'})
		} 
	});
});

