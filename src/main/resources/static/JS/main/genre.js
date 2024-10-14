function fetchAndRenderGenreData(listName) {
    $.ajax({
        url: "/getStudyLogByGenre" + listName.charAt(0).toUpperCase() + listName.slice(1),
        type: "GET",
        success: function(data) {
            renderGenreTable(data.studyLogs);
            var { labels, times } = getGenreLabelsAndTimes(data.studyLogs);
            renderGenreChart(labels, times);
            attachGenreClickHandlers();
        },
        error: function(xhr, status, error) {
            console.error("Error occurred: " + error);
        }
    });
}

function renderGenreTable(studyLogs) {
    var tableBody = $('#tableBodyGenre');
    tableBody.empty();
    studyLogs.forEach(function(studyLog) {
        var row = '<tr>' +
            '<td hidden>' + studyLog.genreId + '</td>' +
            '<td class="genre-name" data-genre-id="' + studyLog.genreId + '" style="text-decoration:underline; color:rgb(128,0,0); cursor:pointer;">' + studyLog.genreName + '</td>' +
            '<td>' + parseFloat(studyLog.sumOfTime).toFixed(1) + '</td>' +
            '<td>' + new Date(studyLog.lastDate).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }) + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="3" style="min-height:27px; height:27px;">' +
            '<span>' + (studyLog.comment || " ") + '</span>' +
            '</td>' + '</tr>';
        tableBody.append(row);
    });
    attachGenreClickHandlers();
}

function getGenreLabelsAndTimes(studyLogs) {
    var labels = [];
    var times = [];
    studyLogs.forEach(function(studyLog) {
        labels.push(studyLog.genreName);
        times.push(parseFloat(studyLog.sumOfTime).toFixed(1));
    });
    return { labels, times };
}
