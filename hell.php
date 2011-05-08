
<!DOCTYPE html> 
<html> 
 
<!--
 
  Created using http://jsbin.com/
  Source can be edited via http://jsbin.com/umicu4/edit
 
--> 
 
  
<head> 
  <meta charset=utf-8> 
  <title>JS Bin</title> 
 
  <style> 
    * { margin: 0; padding: 0; }
    body { background: #938172; }
    ul { list-style: none; overflow: hidden; margin: 60px 0 0 0; padding: 0 0 0 100px; }
    li { float: left; position: relative; }
    a { 
      float: left; 
      padding: 10px 40px; 
      text-decoration: none; 
      color: black;
      background: #626266; 
      -webkit-border-top-left-radius: 15px;
      -webkit-border-top-right-radius: 15px;
      -moz-border-radius-topleft: 15px;
      -moz-border-radius-topright: 15px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px; 
    }
    .active {
      z-index: 3;
    }
    .active a { 
      background: #CC9E61; 
      color: white; 
    }
    li:before, li:after, li a:before, li a:after {
      content: "";
      position: absolute;
      bottom: 0;
    }
    .active:before, .active:after {
      background: #CC9E61; 
      z-index: 1;
    }
    li:before, li:after {
      background: #626266;
      width: 10px;
      height: 10px;
    }
    li:before {
      left: -10px;      
    }
    li:after { 
      right: -10px;
    }
    li a:after, li a:before {
      width: 20px; 
      height: 20px;
      -moz-border-radius: 10px;
      -webkit-border-radius: 10px;
      border-radius: 20px;
      background: #938172;
      z-index: 2;
    }
    .active a:after, .active a:before {
      background: #626266;
    }
    li a:before {
      left: -20px;
    }
    li a:after {
      right: -20px;
    }
    #content { background: #CC9E61; min-height: 400px; }
  </style> 
</head> 
 
<body> 
 
  <ul> 
    <li id="one"><a href="#one">One</a></li> 
    <li id="two" class="active"><a href="#two">Two</a></li> 
    <li id="three"><a href="#three">Three</a></li> 
  </ul> 
  
  <div id="content"></div> 
  
<script> 
</script><script type="text/javascript"> 
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script> 
<script type="text/javascript"> 
var pageTracker = _gat._getTracker("UA-1656750-13");
pageTracker._trackPageview();
</script><script src="/js/render/edit.js"></script> 
</body> 
  
</html>