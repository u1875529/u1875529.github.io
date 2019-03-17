var buildingData;

$(document).ready(function(){

  // jQuery methods go here...
  //	console.log('Hello World!');
  	$('#loadData').click(function () {
  		$.get( 'building.json', function( data ) {
  			buildingData = data;
  			$( '#result' ).text( JSON.stringify(buildingData[0].description) );
  			$( '#buildingImage').attr('src', buildingData[0].imageUrl);
		});
  	});

  	$('#nextBuilding').click(function () {
  		$( '#result' ).text( JSON.stringify(buildingData[1].description) );
  		$( '#buildingImage').attr('src', buildingData[1].imageUrl);
  	});
});
