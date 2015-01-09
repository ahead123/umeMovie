$(document).ready(function() {

	var getPoster = function() {
		var film = $('#term').val();

		$.getJSON("http://api.themoviedb.org/3/search/movie?api_key=4e97980d22d007478cd203a25e459f44&query="+film.toUpperCase(), function(json) {
			if(json !== "Nothing found.") {	
			$('#poster').html('<h2>Hey, found you some movie info!</h2>');	
			var i;
			for(i=0; i<json.results.length; i++){

				$('#titles').append('<ul class="list-unstyled"><li>'+json.results[i].title+ ' - User Rating: ' + json.results[i].vote_average+'</li></ul><img class="img-responsive" src="http://image.tmdb.org/t/p/w500'+json.results[i].poster_path+'"/>');
			}

			console.log(json);
			film = "";

			}

			return false;
		});
	}

	$('#movieLoader').on('click', getPoster);

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




