$(document).ready(function() {

	$('#movieLoader').on('click', getPoster);
		$('button #loadTrailer').on('click', '#loadTrailer', function() {
			alert('hello');
			//getTrailer();
		});

		var getPoster = function() {

			$('#titles').html("");
			var film = $('#term').val();
			var id;
			var poster;

			$.getJSON("http://api.themoviedb.org/3/search/movie?api_key=4e97980d22d007478cd203a25e459f44&query="+film.toUpperCase(), function(json) {
				if(json !== "Nothing found.") {	
				$('#poster').html('<h2 class="text-center">Hey, found you some movie info!</h2>');	
				var i;
					for(i = 0; i < json.results.length; i++){
						id = json.results[i].id;
						poster = json.results[i].poster_path;
						console.log(id);
						$('#titles').append('<div class="col-md-4"><img class="thumbnail center-block" src="http://image.tmdb.org/t/p/w185'+poster+'"/><p class="text-center">'+json.results[i].title+' '+json.results[i].vote_count+'<br><button id="loadTrailer" class="btn btn-primary" href="#" vid_url="'+id+'">load trailer</button></p></div>');
							if(poster === null) {
								$(this.poster).hide();
							}
						} // end for loop
					console.log(json);
				}	// end if statement
			}); //end getJSON call
		} //end getPoster

		var getTrailer = function() {
			 console.log('hello');
				alert($(this).attr(vid_url));
				return false;
				//$.getJSON("http://api.themoviedb.org/3/movie/"+getPoster.id+"?api_key=4e97980d22d007478cd203a25e459f44&append_to_response=videos", function(message) {
					$.getJSON("http://api.themoviedb.org/3/movie/"+vid_id+"?api_key=4e97980d22d007478cd203a25e459f44", function(message) {
					http://api.themoviedb.org/3/movie/id/videos
					if(json !== "Nothing found.") {
						console.log(message);
					} // end if statement
				}); // end getJSON call
		} // end getTrailer

		
		//$('button').on('click','#loadTrailer', getTrailer);






	
	

	// correct url to get to trailer info
	// "http://api.themoviedb.org/3/movie/'+id+'?api_key=4e97980d22d007478cd203a25e459f44"
	

	// var getPoster = function() {
	// 	var film = $('#term').val();
	// 	$.ajax({
	// 		url: "http://api.themoviedb.org/3/search/movie?api_key=4e97980d22d007478cd203a25e459f44&query="+film.toUpperCase(),
	//  		dataType: 'jsonp',
	//  		contentType: 'application/json',
	//  		success: function(results) {
	//  			console.log(results)
	//  		},
	//  		error: function(e) {
	//  			console.log(e.message);
	//  		}
	// 	});
	// }
	// $('#movieLoader').on('click', getPoster);
});




