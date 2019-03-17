$(document).ready(function(){

  // jQuery methods go here...
  //	console.log('Hello World!');
  	$('#click-me').click(function () {
  		$.get( 'building.json', function( data ) {
  			$( '#result' ).text( JSON.stringify(data[0].description) );
  			$( '#buildingImage').attr('src', data[0].imageUrl);
		});
  	});
});