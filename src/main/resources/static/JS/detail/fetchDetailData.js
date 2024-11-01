let dataType = document.getElementById('dataType').textContent.replace(' Log', '');
let dataId = document.getElementById('dataId').textContent.replace('ID: ', '');

$(document).ready(function() {
    fetchDetailData('Weekly', dataType, dataId);
});

function changeDetailList(listName, dataType, dataId) {
    fetchDetailData(listName, dataType, dataId);
}

function fetchDetailData(listName, dataType, dataId) {
    $.ajax({
        url: "/get" + dataType + "DetailData" + listName,
        type: "GET",
        data: { dataType: dataType, dataId: dataId },
        success: function(data) {
            history.pushState({ dataId: dataId }, '', '/' + dataType + 'DetailLog');
            if (dataType === 'Genre') {
                renderDetailTableGenreHeader();
                renderDetailTableGenre(data);
            } else {
                renderDetailTableBookHeader();
                renderDetailTableBook(data);
            }
            var { labels, times, cumulativeTimes, averageTimes } = getLabelsAndTimes(data, listName);
            renderDetailChart(labels, times, cumulativeTimes, averageTimes);
        }
    });
}
