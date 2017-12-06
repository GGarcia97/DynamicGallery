
$( document ).ready(function() {

	var imageArrayReadable = [
		"images/arch.jpg",
		"images/burst.jpeg",
		"images/cloud.jpeg",
		"images/fake.jpeg",
		"images/forest.jpeg",
		"images/launch.jpg",
		"images/red.jpeg",
		"images/sattelite.jpeg",
		"images/selfie.jpg",
		"images/what.jpeg"
	];

var loopCount = imageArrayReadable.length;
console.log(loopCount);

for (var i =  0; i < 0; i + 1) {
	
	var htmlCode =  '<img src="images/' + imageArrayReadable + '">';

	var htmlReadableCode = '<img src="' + imageArrayReadable[i] + '"' + 'width="400" >';
	
	var linkImage = '<a href="' + imageArrayReadable[i] + '">' + htmlCode + '</a>'
	
	var htmlListitem = '<li>' + linkImage + '</li>';

	$("#classEx").append(htmlListItem);

	console.log(htmlListitem);
};



    $('body').css('background-color', 'black');
	$('.lightbox_trigger').click(function(e) {
		
		
		e.preventDefault();
		
	
		var image_href = $(this).attr("href");
		
	
		if ($('#lightbox').length > 0) { // #lightbox exists
			
			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');
			$('#lightbox').show();
		}
		
		else { // create and insert (runs 1st time only)
			
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';
				
			//insert lightbox HTML into page
			$('body').append(lightbox);

			//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').click(function(e) { //must use live, as the lightbox element is inserted into the DOM
		
		$('#lightbox').hide();
	});

		}
		
	});
	
	
});

