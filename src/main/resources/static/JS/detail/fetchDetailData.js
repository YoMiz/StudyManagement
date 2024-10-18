let dataType = document.getElementById('dataType').textContent.replace(' Log','');
let dataId = document.getElementById('dataId').textContent;

$(document).ready(function() {
	if (dataType == 'GENRE') {
		fetchGenreDetailData('List', dataId);
	} else {
		fetchBookDetailData('List', dataId);
	}
});

function changeDetailList(listName, dataType, dataId) {
	if (dataType == 'GENRE') {
		fetchGenreDetailData(listName, dataId);
	} else {
		fetchBookDetailData(listName, dataId);
	}
}
