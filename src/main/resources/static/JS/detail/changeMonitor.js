function monitorInputChanges() {
    $('.time-box, .comment-box').on('input', function() {
        var bookId = $(this).data('book-id');
        var currentTime = $(this).closest('tr').find('input[name="studyLogs[' + bookId + '].time"]').val();
        var currentComment = $(this).closest('tr').find('input[name="studyLogs[' + bookId + '].comment"]').val();

        if (currentTime != initialValues[bookId].time || currentComment != initialValues[bookId].comment) {
            $('#updateButton').css('visibility', 'visible').css('opacity', '1');
        } else {
            $('#updateButton').css('visibility', 'hidden').css('opacity', '0');
        }
    });
}
