
function attachGenreClickHandlers() {
	$('.genre-name').on('click', function() {
		var genreId = $(this).data('genre-id');
		$.ajax({
			url: "/genreDetailLog",
			type: "POST",
			data: { genreId: genreId },
			success: function(response) {
				$('main').html(response);
				history.pushState({ genreId: genreId }, '', '/genreDetailLog');
			},
			error: function(xhr, status, error) {
				console.error("Error occurred: " + error);
			}
		});
	});

	window.onpopstate = function(event) {
		if (event.state && event.state.genreId) {
			var genreId = event.state.genreId;
			console.log("genreId:", genreId);
			$.ajax({
				url: "/genreDetailLog",
				type: "POST",
				data: { genreId: genreId },
				success: function(response) {
					$('main').html(response);
				},
				error: function(xhr, status, error) {
					console.error("Error occurred: " + error);
				}
			});
		} else {
			window.location.href = '/main';
		}
	};

} function attachBookClickHandlers() {
	$('.book-name, .bookDone-name').on('click', function() {
		var bookId = $(this).data('book-id');
		$.ajax({
			url: "/bookDetailLog", // 共通のURLに遷移
			type: "POST",
			data: { bookId: bookId },
			success: function(response) {
				$('main').html(response);
				history.pushState({ bookId: bookId }, '', 'bookDetailLog');
			},
			error: function(xhr, status, error) {
				console.error("Error occurred: " + error);
			}
		});
	});

	window.onpopstate = function(event) {
		if (event.state && event.state.bookId) {
			var bookId = event.state.bookId;
			console.log("bookId", bookId);
			$.ajax({
				url: "/bookDetailLog", // 共通のURLに遷移
				type: "POST",
				data: { bookId: bookId },
				success: function(response) {
					$('main').html(response);
				},
				error: function(xhr, status, error) {
					console.error("Error occurred: " + error);
				}
			});
		} else {
			window.location.href = '/main';
		}
	};
}
