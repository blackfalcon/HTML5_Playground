jQuery(document).ready(function($) {
	// turns whole block element into clickable area
	$(".linkBox").click(function(){
		window.location=$(this).find("a").attr("href");
		return false;
	});
	
	// add autofocus support for non html5 browsers
	if (!("autofocus" in document.createElement("input"))) {
		$("#q").focus();
	}	
  
	//simple UI toggle support  
	$(".toggle").click(function () {
		$(".toggle").toggle();
	});
	
	// Auto opens all hrefs that point to external sites in another window
	$('a[href^="http://"]')
		.attr({
		target: "_blank", 
		title: "Opens in a new window"
	});
	
});


