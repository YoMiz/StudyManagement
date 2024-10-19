function fetchGenreDetailData(listName, dataId) {
	$.ajax({
		url: "/getGenreDetailData" + listName.slice(0),
		type: "GET",
		success: function(data) {
			renderDetailTableGenre(data.studyLogs);
			var { labels, times } = getGenreLabelsAndTimes(data.studyLogs);
			renderDetailChart(labels, times);
		},
		error: function(error) {
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
		error: function(error) {
			console.error("Error occurred:" + error);
		}
	});
}
function renderDetailTableGenre(studyLogs){
	var tableBody = $('#tableBodyDetail');
	tableBody.empty();
	studyLogs.forEach(function(studyLog, i){
		var bookName = studyLog.bookName;
		var genreName = studyLog.genreName;
		var author = studylog.author;
		var sumOfTime = parseFloat(studyLog.sumOfTime).toFixed(1);
		var date = studyLog.date;
		var time = studyLog.time;
		var comment = studyLog.comment;
		var row = '<tr>' 

	});
}
