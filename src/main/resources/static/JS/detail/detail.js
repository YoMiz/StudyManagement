
function fetchDetailData(listName, dataType, dataId) {
	$.ajax({
		url: "/get" + dataType + "DetailData" + listName,
		type: "GET",
		data: { dataType: dataType, dataId: dataId },
		success: function(data) {
			history.pushState({ dataId: dataId }, '', '/' + dataType + 'DetailLog');
			if (dataType === 'Genre') {
//				renderDetailTableGenreHeader();
				renderDetailTableGenre(data);
			} else {
				renderDetailTableBook(data);
//				renderDetailTableBookHeader();
			}
			var { labels, times } = getLabelsAndTimes(data, listName);
			renderDetailChart(labels, times);
		}
	});
}
//function renderDetailTableGenreHeader(){
//	var tableHead = $('#tableHedDetail');
//	tableBoyd.empty();
//	var headRow =
//	'<tr><th> Date </th>' +
//	'<th> Book </th>' +
//	'<th> Author </th>' +
//	'<th> Time </th>' +
//	'<th> SUM </th></tr>' 
//	tableHead.append(headRow);
//}
function renderDetailTableGenre(data) {
	var tableBody = $('#tableBodyDetail');
	tableBody.empty();
	data.studyLogs.forEach(function(studyLog) {
		var row = 
			'<tr>' +
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
