$(document).ready(function(){

  // jQuery methods go here...
  //	console.log('Hello World!');
  	$('#click-me').click(function () {
  		$.get( 'building.json', function( data ) {
  			$( '#result' ).text( data );
  			console.log('DATA: ', data);
		});
  	});
});