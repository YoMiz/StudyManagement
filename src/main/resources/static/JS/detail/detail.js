function fetchDetailData(listName, dataType, dataId) {
    $.ajax({
        url: "/get" + dataType + "DetailData" + listName,
        type: "GET",
        data: { dataType: dataType, dataId: dataId },
        success: function(data) {
            history.pushState({ dataId: dataId }, '', '/' + dataType + 'DetailLog');
            if (dataType === 'Genre') {
                renderDetailTableGenreHeader();
                renderDetailTableGenre(data);
            } else {
                renderDetailTableBookHeader();
                renderDetailTableBook(data);
            }
            var { labels, times, cumulativeTimes, averageTimes } = getLabelsAndTimes(data, listName);
            renderDetailChart(labels, times, cumulativeTimes, averageTimes);
        }
    });
}


function renderDetailTableGenreHeader() {
    var tableHead = $('#tableHeadDetail');
    tableHead.empty();
    var headRow = '<tr><th>Date</th><th>Book</th><th>Author</th><th>Time</th><th>SUM</th></tr>';
    tableHead.append(headRow);
}

function renderDetailTableBookHeader() {
    var tableHead = $('#tableHeadDetail');
    tableHead.empty();
    var headRow = '<tr><th>Date</th><th>Genre</th><th>Time</th><th>SUM</th></tr>';
    tableHead.append(headRow);
}

function renderDetailTableGenre(data) {
    var tableBody = $('#tableBodyDetail');
    tableBody.empty();
    data.studyLogs.forEach(function(studyLog) {
        var row = '<tr>' +
            '<td><span>' + new Date(studyLog.date).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }) + '</span></td>' +
            '<td>' + studyLog.bookName + '</td>' +
            '<td>' + studyLog.author + '</td>' +
            '<td>' + studyLog.time + '</td>' +
            '<td>' + studyLog.sumOfTime + '</td>' +
            '</tr>' +
            '<tr><td colspan="5" style="min-height:27px; height:27px; text-align:center;">' +
            '<span>' + (studyLog.comment || " ") + '</span>' +
            '</td></tr>';
        tableBody.append(row);
    });
}

function renderDetailTableBook(data) {
    var tableBody = $('#tableBodyDetail');
    tableBody.empty();
    data.studyLogs.forEach(function(studyLog) {
        var row = '<tr>' +
            '<td><span>' + new Date(studyLog.date).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }) + '</span></td>' +
            '<td>' + studyLog.genreName + '</td>' +
            '<td>' + studyLog.time + '</td>' +
            '<td>' + studyLog.sumOfTime + '</td>' +
            '</tr>' +
            '<tr><td colspan="5" style="min-height:27px; height:27px; text-align:center;">' +
            '<span>' + (studyLog.comment || " ") + '</span>' +
            '</td></tr>';
        tableBody.append(row);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var dataType = document.getElementById("dataType").textContent.replace(" Log", "");
    var tableHeadDetail = document.getElementById("tableHeadDetail");

    if (dataType === "Genre") {
        tableHeadDetail.innerHTML = `
            <tr>
                <th>Date</th>
                <th>Book</th>
                <th>Author</th>
                <th>Time</th>
                <th>SUM</th>
            </tr>
        `;
    } else if (dataType === "Book") {
        tableHeadDetail.innerHTML = `
            <tr>
                <th>Date</th>
                <th>Genre</th>
                <th>Time</th>
                <th>SUM</th>
            </tr>
        `;
    }
});
