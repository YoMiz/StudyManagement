var detailChartInstance;

function getLabelsAndTimes(data, listName) {
    var labels = [];
    var times = [];
    var cumulativeTimes = [];
    var cumulativeSum = 0;
    var totalSum = 0;

    data.studyLogs.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
    });

    var aggregatedData = {};
    data.studyLogs.forEach(function(studyLog) {
        var date = studyLog.date.split(' ')[0];
        if (aggregatedData[date]) {
            aggregatedData[date] += studyLog.totalTime;
        } else {
            aggregatedData[date] = studyLog.totalTime;
        }
    });

    Object.keys(aggregatedData).forEach(function(date) {
        labels.push(new Date(date).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }));
        times.push(aggregatedData[date]);
        cumulativeSum += aggregatedData[date];
        cumulativeTimes.push(cumulativeSum);
        totalSum += aggregatedData[date];
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
