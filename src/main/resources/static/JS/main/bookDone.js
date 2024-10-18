function fetchBookDoneData(listName) {
	$.ajax({
		url: "/getStudyLogByBookDone" + listName.charAt(0).toUpperCase() + listName.slice(1),
		type: "GET",
		success: function(data) {
			renderBookDoneTable(data.studyLogs);
			var { labels, times } = getBookDoneLabelsAndTimes(data.studyLogs);
			renderBookDoneChart(labels, times);
			attachBookClickHandlers(); // 共通のクリックハンドラーを呼び出し
		},
		error: function(xhr, status, error) {
			console.error("Error occurred: " + error);
		}
	});
}

function renderBookDoneTable(studyLogs) {
	var tableBody = $('#tableBodyBookDone');
	tableBody.empty();
	studyLogs.forEach(function(studyLog, i) {
		var bookName = studyLog.bookName || "";
		var genreName = studyLog.genreName || "";
		var author = studyLog.author || "";
		var sumOfTime = parseFloat(studyLog.sumOfTime).toFixed(1) || "";
		var lastDate = studyLog.lastDate || "";
		var comment = studyLog.comment || " ";
		var row = '<tr>' +
			'<td hidden><input type="text" id="listField" value="' + studyLog.bookId + '" name="studyLogs[' + i + '].bookId" /></td>' +
			'<td class="bookDone-name" data-book-id="' + studyLog.bookId + '" style="text-decoration:underline; color:rgb(128,0,0); cursor:pointer;">' + bookName + '</td>' +
			'<td>' + genreName + '</td>' +
			'<td>' + author + '</td>' +
			'<td>' + sumOfTime + '</td>' +
			'<td>' + new Date(lastDate).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }) + '</td>' +
			'</tr>' +
			'<tr>' +
			'<td colspan="5">' + comment + '</td>' +
			'</tr>';
		tableBody.append(row);
	});
	attachBookClickHandlers(); // 共通のクリックハンドラーを呼び出し
}

function getBookDoneLabelsAndTimes(studyLogs){
	var labels = [];
	var times = [];
	studyLogs.forEach(function(studyLog){
		labels.push(studyLog.bookName);
		times.push(parseFloat(studyLog.sumOfTime).toFixed(1));
	});
	return { labels, times };
}

