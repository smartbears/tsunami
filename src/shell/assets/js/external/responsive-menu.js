function adaptMenu() {
	
	/* 	toggle menu on resize */
	
	$('.navbar').each(function() {
			if ( $(this).parent().width() < 768 ) {
				$(this).children('.navbar-nav').hide(0);
				$(this).children('.navbar-toggled').show(0);
			}
			else {
				$(this).children('.navbar-nav').show(0);
				$(this).children('.navbar-toggled').hide(0);
			}
		});		
		
		
}

$(function() {

	 adaptMenu();
	 
	 /* slide down mobile menu on click */
	 
	 $('.navbar-toggled, .navbar-toggled .navbar-button').click(function(){
	 	if ( $(this).is(".navbar-closed")) {
		 	 $(this).find('ul').stop().show(300);
		 	 $(this).removeClass("navbar-closed");
	 	}
	 	else {
		 	$(this).find('ul').stop().hide(300);
		 	 $(this).addClass("navbar-closed");
	 	}
		
	});	

});
	/* 	hide mobile menu on resize */
$(window).resize(function() {
 	adaptMenu();
});