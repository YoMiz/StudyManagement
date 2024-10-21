
function fetchDetailData(listName, dataType, dataId) {
	$.ajax({
		url: "/get" + dataType +"DetailData" + listName,
		type: "GET",
		data: { dataType: dataType, dataId: dataId },
		success: function(data) {
			history.pushState({ dataId: dataId }, '', '/' + dataType + 'DetailLog');
			renderDetailTable(data, listName, dataType, dataId);
			var { labels, times } = getLabelsAndTimes(data, listName);
			renderDetailChart(labels, times);
			console.log(data);
		},
		error: function(error) {
			console.error("Error occurred: ", error);
		}
	});
}

function renderDetailTable(data, listName, dataType, dataId) {
	var tableBody = $('#tableBodyDetail');
	tableBody.empty();
	data.studyLogs.forEach(function(studyLog) {
		var row = '<tr>' +
		'<td>' + studyLog.bookName + '</td>' +
		'<td>' + studyLog.author + '</td>' +
		'</tr>';
		tableBody.append(row);
	});
}
