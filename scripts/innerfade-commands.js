//// functional commands for innerfade UX

jQuery(document).ready(function($) {
	$('.fade').innerfade({
		speed: 1000,
		timeout: 10000,
		type: 'random_start',
		containerheight: '1.5em'			
	});
});