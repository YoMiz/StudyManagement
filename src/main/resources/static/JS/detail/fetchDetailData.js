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
            fetchDetailChartData(listName, dataType, dataId);
        }
    });
}

function fetchDetailChartData(listName, dataType, dataId) {
    let url;
    if (dataType === 'Genre') {
        url = "/getAggregatedGenreDetailData" + listName;
    } else {
        url = "/getAggregatedBookDetailData" + listName;
    }

    $.ajax({
        url: url,
        type: "GET",
        data: { dataType: dataType, dataId: dataId },
        success: function(data) {
            console.log("Chart Data:", data); // コンソールにデータを出力
            var { labels, times, cumulativeTimes, averageTimes } = getLabelsAndTimes(data, listName);
            console.log("Labels:", labels); // コンソールにラベルを出力
            console.log("Times:", times); // コンソールに時間を出力
            console.log("Cumulative Times:", cumulativeTimes); // コンソールに累積時間を出力
            console.log("Average Times:", averageTimes); // コンソールに平均時間を出力
            renderDetailChart(labels, times, cumulativeTimes, averageTimes);
        }
    });
}

function getLabelsAndTimes(data, listName) {
    var labels = [];
    var times = [];
    var cumulativeTimes = [];
    var cumulativeSum = 0;
    var totalSum = 0;

    data.studyLogs.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
    });

    data.studyLogs.forEach(function(studyLog) {
        var date = new Date(studyLog.date).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' });
        labels.push(date);
        times.push(studyLog.time);
        cumulativeSum += studyLog.time;
        cumulativeTimes.push(cumulativeSum);
        totalSum += studyLog.time;
    });

    var averageTime = totalSum / times.length;
    var averageTimes = Array(times.length).fill(averageTime);

    return { labels, times, cumulativeTimes, averageTimes };
}

function renderDetailChart(labels, times, cumulativeTimes, averageTimes) {
    var chartElement = document.getElementById('detailChart');
    chartElement.style.maxWidth = '750px';
    chartElement.style.maxHeight = '400px';
    chartElement.style.width = '700px';
    chartElement.style.height = '350px';
    chartElement.style.display = 'block';
    chartElement.style.marginLeft = 'auto';
    chartElement.style.marginRight = 'auto';

    var ctx = chartElement.getContext('2d');
    if (detailChartInstance) {
        detailChartInstance.destroy();
    }
    detailChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Times',
                    data: times,
                    backgroundColor: 'rgba(190, 150, 140, 0.2)',
                    borderColor: 'rgba(150, 130, 120, 1)',
                    borderWidth: 1,
                    fill: true,
                    pointBackgroundColor: 'rgba(150, 130, 120, 1)',
                    pointBorderColor: 'rgba(150, 130, 120, 1)',
                    pointRadius: 1.5,
                    pointHoverRadius: 2.5,
                    pointStyle: 'circle',
                    showLine: true,
                    tension: 0.4
                },
                {
                    label: 'SUM',
                    data: cumulativeTimes,
                    backgroundColor: 'rgba(140, 190, 140, 0.2)',
                    borderColor: 'rgba(120, 150, 120, 1)',
                    borderWidth: 1,
                    fill: true,
                    pointBackgroundColor: 'rgba(120, 150, 120, 1)',
                    pointBorderColor: 'rgba(120, 150, 120, 1)',
                    pointRadius: 1.5,
                    pointHoverRadius: 2.5,
                    pointStyle: 'circle',
                    showLine: true,
                    tension: 0.4
                },
                {
                    label: 'Average Time',
                    data: averageTimes,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(100, 100, 100, 1)',
                    borderWidth: 1,
                    fill: false,
                    pointRadius: 0,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw;
                        }
                    }
                }
            }
        }
    });
}
