function addEventListeners(i, type) {
    $('#time-box-' + type + '-' + i).on('input', function() {
        $('#check-box-' + type + '-' + i).prop('checked', true);
    });

    $('#comment-box-' + type + '-' + i).on('input', function() {
        $('#check-box-' + type + '-' + i).prop('checked', true);
    });
}

$(document).ready(function() {
    $('#updateButton').on('click', function() {
        var checkedBoxes = $('input[type="checkbox"]:checked');
        var dataToSend = [];

        checkedBoxes.each(function() {
            var row = $(this).closest('tr');
            var logId = $(this).val();
            var time = row.find('.time-box').val();
            var comment = row.next().find('.comment-box').val();
            dataToSend.push({
                logId: logId,
                time: time,
                comment: comment
            });
        });

        $.ajax({
            url: '/updateLogs', // サーバーサイドのエンドポイントURL
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dataToSend),
            success: function(response) {
                console.log('Data sent successfully:', response);
            },
            error: function(xhr, status, error) {
                console.error('Error sending data:', error);
            }
        });
    });
});


