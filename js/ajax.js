var buildingData;
	$(document).ready(function(){
	// jQuery methods go here...
	// console.log('Hello World!');
		$('#loadData').click(loadData);
			$('#nextBuilding').click(function () {
				updateElement(buildingData[1])
  	});
});

function updateElement(data) {
	$( '#result' ).text( JSON.stringify(data.description) );
  	$( '#buildingImage').attr('src', data.imageUrl);
}

function loadData () {
	$.get( 'building.json', function( data ) {
  			buildingData = data;
  			updateElement(buildingData[0])
		});

}

$("nav div").click(function() {
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
});

$("ul li").click(function() {
  $("ul ul").slideUp();
  $(this).find('ul').slideToggle();
});

$(window).resize(function() {
  if($(window).width() > 768) {
    $("ul").removeAttr('style');
  }
});