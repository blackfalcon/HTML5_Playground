jQuery(document).ready(function($) {
	//simple UI toggle support  
	$(".toggle_button").click(function () {
		$(".toggle_box").fadeToggle("medium", "linear");
	});
		
	$(".toggle_options").click(function () {
		$(".toggle_box_screen_options").fadeToggle("medium", "linear");
	});
	
	$("a.pausebutton").click(function () {
      $(this).toggleClass("playbutton");
    });

	$( "#slider-range-min" ).slider({
		range: "min",
		min: 1,
		max: 10,
		value: 2,
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.value );
		}
	});
	$( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) );
	
	$('a[href^="http://"]')
		.attr({
		target: "_blank", 
		title: "Opens in a new window"
	});
});