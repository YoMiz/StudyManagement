function fetchDetailData(listName, dataType, dataId){
	$.ajax({
		url:"/getDetailDataBy" + dataType.charAt(0).toUpperCase() + dataId + listName.slice(1),
		type:"GET",
		success: function(data){
			renderDetailTable(data.studyLogs);
			var{ labels, times } = getBookLabelsAndTimes(data.studyLogs);
			renderDetailChart(labels, times);
		},
		error: function(xhr, status, error){
			console.error("Error occurred:" + error);
			}
	});
}
function renderDetailTalbe(studyLogs){
	var tableBody = $('#tableBodyDetail');
	tableBody.empty();
	studyLogs.forEach(function(studyLog, i){
	
	});
}