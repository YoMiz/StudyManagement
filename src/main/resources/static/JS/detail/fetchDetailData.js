let dataType = document.getElementById('dataType').textContent.replace(' Log', '');
let dataId = document.getElementById('dataId').textContent.replace('ID: ', '');

$(document).ready(function() {
	fetchDetailData('List', dataType, dataId);
});

function changeDetailList(listName, dataType, dataId) {
	fetchDetailData(listName, dataType, dataId);
}
