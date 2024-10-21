function attachClickHandlers() {
    $('.genre-name').on('click', function() {
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
        if (event.state && event.state.dataId) { 
            var dataId = event.state.dataId; 
            var dataType = $('.genre-name[data-id="' + dataId + '"]').data('type'); 
            console.log(dataId);
            console.log(dataType);
            $.ajax({
                url: "/" + dataType + "DetailDataList",
                type: "POST",
                data: { dataId: dataId },
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
