<!DOCTYPE html>
<html>
<?php include 'includes/head.php'?>

<body id="about">
	<section class="container" id="">
		
		<?php include 'includes/header.php'?>
		
		<section class="left">
			<?php include 'includes/nav.php'?>
		</section>
		
		<section class="right">
			
			<header><h1>@font-face, this is pretty awesome</h1></header>
			
			<article>
				
				<header><h1>How easy is this?</h1></header>
				
				<aside>
					<h2>Things that are awesome</h2>
					<p><a href="http://www.fontsquirrel.com/">fontsquirrel.com</a></p>
					<p><a href="http://code.google.com/webfonts">Google Font Directory</a></p>
				</aside>
				
				<p>I have updated this site to use the awesome powers of @font-face.  How did I do it?  That is a really easy question to answer now that this technology has finally reasoned itself out.</p>
				<h3>Tool #1 - <a href="http://www.fontsquirrel.com/">fontsquirrel.com</a>  </h3>
				<p>This is really awesome.  There is a whole library of <strong>FREE TO USE FONTS</strong>.  What is awesome is that there are so many fonts to choose from, but there is a slight learning curve.  To use a font, you need to download the @font-face kit.  From there you can upload the fonts to your web server and then using the generated CSS from fontsquirrel you can get your site up and running in no time.  Simply follow the example code and you should be fine.</p>
				<p>The downside is that you are hosting the fonts, so depending on how good your data center is, you may or may not see issues with screen load time.</p>
				<h3>Tool #2 - <a href="http://code.google.com/webfonts">Google Font Directory</a></h3>
				<p>The Google Font Directory is really easy to use.  Almost to easy.  There are some really awesome advantages here.</p>
				<ol>
					<li>1) You don't have to host the fonts</li>
					<li>2) The google server is WICKED FAST</li>
					<li>3) Add one line of code, @import url(http://fonts.google ... in your text stylesheet.</li>
				</ol>
				<p>Really, it doesn't get much easier then that.</p>
				<p>The downside is that there are fewer fonts to choose from.  But, that list is growing and there are some pretty awesome fonts to choose from.  </p>
				
				<footer>Posted 1.3.11</footer>
			
			</article>
		
		</section>
		
		<?php include 'includes/footer.php'?>
	
	</section>
</body>
</html>


