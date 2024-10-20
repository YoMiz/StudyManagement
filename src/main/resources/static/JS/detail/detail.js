function fetchGenreDetailData(listName, dataId) {
  $.ajax({
    url: "/getGenreDetailData" + listName,
    type: "GET",
    data: { id: dataId }, 
        success: function(data) {
        renderDetailTableGenre(data.studyLogs);
        var { labels, times } = getGenreLabelsAndTimes(data.studyLogs);
        renderDetailChart(labels, times);
        console.log(data);
    },
    error: function(error) {
        console.error("Error occurred:" + error);
    }
});
}
function fetchBookDetailData(listName, dataId) {
    $.ajax({
        url: "/getBookDetailData" + listName,
        type: "GET",
        success: function(data) {
            renderDetailTableBook(data.studyLogs);
            var { labels, times } = getBookLabelsAndTimes(data.studyLogs);
            renderDetailChart(labels, times);
            console.log(dataId);
            console.log(data);
        },
        error: function(error) {
            console.error("Error occurred:" + error);
        }
    });
}

function renderDetailTableGenre(studyLogs) {
    var tableBody = $('#tableBodyDetail');
    tableBody.empty();
    studyLogs.forEach(function(studyLog, i) {
        var bookName = studyLog.bookName;
        var genreName = studyLog.genreName;
        var author = studyLog.author;
        var sumOfTime = parseFloat(studyLog.sumOfTime).toFixed(1);
        var date = studyLog.date;
        var time = studyLog.time;
        var comment = studyLog.comment;
        var row = '<tr>' +
            '<td><input type="text" id="listField" value="' + studyLog.genreId + '" name="studyLog[' + i + '].genreId" /></td>' +
            '<td class="book-name" data-book-id="' + studyLog.bookId + '" style="text-decoration:underline; color:rgb(128,0,0); cursor:pointer;">' + bookName + '</td>' +
            '<td>' + genreName + '</td>' +
            '<td>' + author + '</td>' +
            '<td>' + sumOfTime + '</td>' +
            '<td>' + date + '</td>' +
            '<td>' + time + '</td>' +
            '<td>' + comment + '</td>' +
            '</tr>';
        tableBody.append(row);
    });
}
