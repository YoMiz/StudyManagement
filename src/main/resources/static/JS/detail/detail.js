function fetchGenreDetailData(listName, dataId) {
	$.ajax({
		url: "/getGenreDetailData" + listName.slice(0),
		type: "GET",
		success: function(data) {
			//			renderDetailTable(data.studyLogs);
			//			var{ labels, times } = getGenreLabelsAndTimes(data.studyLogs);
			//			renderDetailChart(labels, times);
			console.log(dataId);
			console.log(data);
		},
		error: function(xhr, status, error) {
			console.error("Error occurred:" + error);
		}
	});
}
function fetchBookDetailData(listName, dataId) {
	$.ajax({
		url: "/getBookDetailData" + listName.slice(0),
		type: "GET",
		success: function(data) {
			//			renderDetailTable(data.studyLogs);
			//			var{ labels,times } = getBookLabelsAndTimes(data.studyLogs);
			//			renderDetailChart(labels, times);
			console.log(dataId);
			console.log(data);
		},
		error: function(xhr, status, error) {
			console.error("Error occurred:" + error);
		}
	});
}
//function renderDetailTable(studyLogs){
//	var tableBody = $('#tableBodyDetail');
//	tableBody.empty();
//	studyLogs.forEach(function(studyLog, i){
//
//	});
//}
