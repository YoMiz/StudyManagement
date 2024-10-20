let dataType = document.getElementById('dataType').textContent.replace(' Log','');
let dataId = document.getElementById('dataId').textContent.replace('ID: ', '');

$(document).ready(function() {
	if (dataType == 'GENRE') {
		fetchGenreDetailData('List', dataId);
		console.log('fetch' + dataType);
		console.log('fetch' + dataId);
	} else {
		fetchBookDetailData('List', dataId);
		
		console.log('fetch' + dataType);
		console.log('fetch' + dataId);
	}
});

function changeDetailList(listName, dataType, dataId) {
	if (dataType == 'GENRE') {
		fetchGenreDetailData(listName, dataId);
		console.log('fetch' + dataType);
		console.log('fetch' + dataId);
	} else {
		fetchBookDetailData(listName, dataId);
		console.log(dataType);
		console.log(dataId);
	}
}
