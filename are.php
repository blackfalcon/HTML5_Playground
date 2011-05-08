<!DOCTYPE html>
<html>
<?php include 'includes/head.php'?>

<body id="are">
	<section class="container" id="">
		
		<?php include 'includes/header.php'?>
		
		<section class="left">
			<?php include 'includes/nav.php'?>
		</section>
		
		<section class="right">
			
			<header><h1>Flexible Box Model</h1></header>
			
			<article>
				
				<header><h1>Example</h1></header>
				
				<aside><a href="http://www.html5rocks.com/tutorials/flexbox/quick/">Read more on Flexbox</a></aside>
				
				<p>Lets work out the new HTML5 Flexbox.  This is pretty awesome.  Basically Flexbox is a whole new way of looking at how elements can be stacked around each other.</p>
				<p>How do you use this technique in a real world application?</p>
				<p>Header nav, a better solution for auto width of the navigation items, whereas in the past I had to set hard values.</p>
				<p>Footer nav, using Flexbox you can have a block element with an auto width and be centered!!! How freakign huge is that?</p>
				
				<h3>Visual example:</h3>				
				<div id="flexbox">
				  <p>child 1</p>
				  <p>child 2</p>
				  <p>child 3</p>
				</div>
				
				<h3>The markup:</h3>
<pre>
&lt;div id=&quot;flexbox&quot;&gt;
  &lt;p&gt;child 1&lt;/p&gt;
  &lt;p&gt;child 2&lt;/p&gt;
  &lt;p&gt;child 3&lt;/p&gt;
&lt;/div&gt;</pre>
				<h3>The CSS:</h3>
<pre>
#flexbox { 
	display: -webkit-box;
	-webkit-box-orient: horizontal;
	-webkit-box-pack: center;
	-webkit-box-align: center;
	
	display: -moz-box;
	-moz-box-orient: horizontal;
	-moz-box-pack: center;
	-moz-box-align: center;
	
	height: 100px;
	border: 1px solid #ccc;
	padding: 0 10px;
	margin: 0 0 10px;
 }
 
#flexbox p {
	-webkit-box-flex: 1; 
	-moz-box-flex: 1; 
	text-align: center; 
	margin: 0px; 
	padding: 5px;
}

#flexbox &gt; p:nth-child(1){ background : #FCC; }
#flexbox &gt; p:nth-child(2){ background : #CFC; }
#flexbox &gt; p:nth-child(3){ background : #CCF; }</pre>
				<footer>Posted 1.5.11</footer>
			</article>
		
		</section>
		
		<?php include 'includes/footer.php'?>
	
	</section>
</body>
</html>


