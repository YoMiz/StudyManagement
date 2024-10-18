function fetchBookData(listName) {
	$.ajax({
		url: "/getStudyLogByBook" + listName.charAt(0).toUpperCase() + listName.slice(1),
		type: "GET",
		success: function(data) {
			renderBookTable(data.studyLogs);
			var { labels, times } = getBookLabelsAndTimes(data.studyLogs);
			renderBookChart(labels, times);
			attachBookClickHandlers();
		},
		error: function(xhr, status, error) {
			console.error("Error occurred: " + error);
		}
	});
}
function renderBookTable(studyLogs) {
    var tableBody = $('#tableBodyBook');
    tableBody.empty();
    studyLogs.forEach(function(studyLog, i) {
        var bookName = studyLog.bookName || "";
        var genreName = studyLog.genreName || "";
        var author = studyLog.author || "";
        var sumOfTime = parseFloat(studyLog.sumOfTime).toFixed(1) || "";
        var lastDate = studyLog.lastDate || "";
        var comment = studyLog.comment || "";
        var row = '<tr>' +
            '<td hidden><input type="text" id="listField" value="' + studyLog.bookId + '" name="studyLogs[' + i + '].bookId" /></td>' +
            '<td class="book-name" data-book-id="' + studyLog.bookId + '" style="text-decoration:underline; color:rgb(128,0,0); cursor:pointer;">' + bookName + '</td>' +
            '<td><span>' + genreName + '</span></td>' +
            '<td><span>' + author + '</span></td>' +
            '<td><span>' + sumOfTime + '</span></td>' +
            '<td><span>' + new Date(lastDate).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }) + '</span></td>' +
            '<td><input type="number" class="time-box" data-book-id="' + studyLog.bookId + '" step="0.5" min="0" value="' + studyLog.time + '" name="studyLogs[' + i + '].time" placeholder="0.0" /></td>' +
            '<td hidden><input type="checkbox" id="check' + studyLog.bookId + '" value="1" name="studyLogs[' + i + '].updateCheck" /></td>' +
            '<td><input type="checkbox" id="Done' + studyLog.bookId + '" value="1" name="studyLogs[' + i + '].status" /></td>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="7"><input type="text" class="comment-box" value="' + comment + '" name="studyLogs[' + i + '].comment" placeholder="' + comment + '" /></td>' +
            '</tr>';
        tableBody.append(row);
    });
    attachBookClickHandlers();
}

function getBookLabelsAndTimes(studyLogs) {
	var labels = [];
	var times = [];
	studyLogs.forEach(function(studyLog) {
		labels.push(studyLog.bookName);
		times.push(parseFloat(studyLog.sumOfTime).toFixed(1));
	});
	return { labels, times };
}

