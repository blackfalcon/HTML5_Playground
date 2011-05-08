/*

	How to use this script:
	
	First, include the script in the page you want to use it on.
	
	Example:
	about/index.php
	<script type="text/javascript" src="http://html5.dalesande.com/scripts/randomize.js"></script>
	
	Then, call the function(s) that you want to run in the onLoad handler of the body element.
	
	Example:
	about/index.php
	<body id="about" class="mission_statement" onLoad="randomQuote(); randomImage();">
	
	To add images/quotes:

	includes/quotes.php
	includes/images.php
	
	Just add new elements to the containing block element.
	Be sure to set the new element's display to none, as this script simple sets a random
	element's display to "show".

*/

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}


function randomQuote() {
	// Grab hold of the block element containing all quotes
	var quotesBlock = document.getElementById("quotes_list");
	// Put all quotes (child div elements) in an array
	var listOfQuotes = quotesBlock.getElementsByTagName("div");
	// select a random one to set its display

	var random;
	
	random = Math.floor(Math.random() * listOfQuotes.length);
	
	// while the cookie index is the same as the random number
	while (readCookie("last_random_quote") == random) {
		// generate a new number
		random = Math.floor(Math.random() * listOfQuotes.length);
	}
	createCookie("last_random_quote", random, 7);
	// set it to display the quote
	listOfQuotes[random].style.display="";
		
}

function orderedQuote() {
	var quotesBlock = document.getElementById("quotes_list");
	// Put all quotes (child div elements) in an array
	var listOfQuotes = quotesBlock.getElementsByTagName("div");
	
	var quote = readCookie("last_ordered_quote");
	
	if (quote == null || quote == "") {
		// if cookie not set, start at 0
		quote = 0;		
	} else if (quote == listOfQuotes.length -1) {
		// start over
		quote = 0;
	} else {
		quote++;
	}
	listOfQuotes[quote].style.display="";
	createCookie("last_ordered_quote", quote, 7);
	
}



function randomImage() {
	// see the function above. it's the same procedure
	var imagesBlock = document.getElementById("images_list");
	var listOfImages = imagesBlock.getElementsByTagName("img");
	
	var random = Math.floor(Math.random() * listOfImages.length);
	
	listOfImages[random].style.display="";
	
}

