$( function () {
	'use strict';
	//console.log($(this).scrollTop());
	/* Scrolling nav */
	$(window).scroll(function () {
		var navbar = $('.navbar'); // assign it to a variable
		if ($(this).scrollTop() >= navbar.height()) {
			navbar.addClass("scrolled");
		} else {
			navbar.removeClass("scrolled");
		}
		// Fixed top the navbar when scrolling
		/*
		if ($(this).scrollTop() >= 400 ) {
			navbar.addClass("nav fixed-top");
		} else {
			navbar.removeClass("nav fixed-top");
		}
		*/
		
	});
	/* Tabs */
	$('.dynaminc-tabs ul li').click( function () {
		// Add active class to the Selected Link !
		$(this).addClass('active').siblings().removeClass('active');
		// Hide All Divs 
		$('.tabs .tab-content > div').hide();
		// Show Selected Tap
		$('.' + $(this).data('class')).show(); //Concatination with the '.' to take the class
	});
});