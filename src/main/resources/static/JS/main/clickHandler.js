function attachClickHandlers() {
    $('.genre-name, .book-name, .book-done-name').on('click', function() {
        var dataType = $(this).data('type'); 
        var dataId = $(this).data('id'); 
        $.ajax({
            url: "/" + dataType + "DetailLog" ,
            type: "POST",
            data: { dataId: dataId },
            success: function(response) {
                $('main').html(response);
                history.pushState({ dataId: dataId }, '', '/' + dataType + 'DetailLog');
            },
            error: function(xhr, status, error) {
                console.error("Error occurred: " + error);
            }
        });
    });

    window.onpopstate = function(event) {
            window.location.href = '/main';
        }
    };

