
function attachClickHandlers() {
    $('.genre-name').on('click', function() {
        var genreId = $(this).data('genre-id');
        var dataType = $(this).data('type'); 
        $.ajax({
            url: "/" + dataType + "DetailLog",
            type: "POST",
            data: { genreId: genreId },
            success: function(response) {
                $('main').html(response);
                history.pushState({ genreId: genreId }, '', '/' + dataType + 'DetailLog');
            },
            error: function(xhr, status, error) {
                console.error("Error occurred: " + error);
            }
        });
    });

    window.onpopstate = function(event) {
        if (event.state && event.state.genreId) {
            var genreId = event.state.genreId;
            var dataType = $('.genre-name[data-genre-id="' + genreId + '"]').data('type');
            console.log("genreId (popstate):", genreId); // Debugging log
            console.log("dataType (popstate):", dataType); // Debugging log
            $.ajax({
                url: "/" + dataType + "DetailLog",
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
}
 function attachBookClickHandlers() {
	$('.book-name, .bookDone-name').on('click', function() {
		var bookId = $(this).data('book-id');
		$.ajax({
			url: "/bookDetailLog", 
			type: "POST",
			data: { bookId: bookId },
			success: function(response) {
				$('main').html(response);
				history.pushState({ bookId: bookId }, '', 'bookDetailLog');
			},
			error: function(error) {
				console.error("Error occurred: " + error);
			}
		});
	});

	window.onpopstate = function(event) {
		if (event.state && event.state.bookId) {
			var bookId = event.state.bookId;
			$.ajax({
				url: "/bookDetailLog", 
				type: "POST",
				data: { bookId: bookId },
				success: function(response) {
					$('main').html(response);
				},
				error: function(error) {
					console.error("Error occurred: " + error);
				}
			});
		} else {
			window.location.href = '/main';
		}
	};
}
