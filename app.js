$(document).ready(function(){

  // jQuery methods go here...
  //	console.log('Hello World!');
  	$('#click-me').click(function () {
  		console.log('button clicked');
  		$.get( "building.json", function( data ) {
  			$( "#result" ).html( data );
  			alert( "Load was performed." );
		});
  	});
});