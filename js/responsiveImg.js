$("img").responsiveImg();
	breakpoints : {
    "_small":240,
    "_medium":750,
    "_large":1080
	},
	srcAttribute : "images/halifax-town.png",
	pathToPHP : "js",
	createNewImages : true,
	jpegQuality : 90,
	callback:false
	
$("#div1").responsiveImg({srcAttribute:"data-src"});
