var detailChartInstance;
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
    if(detailChartInstance){
        detailChartInstance.destroy();
    }
    detailChartInstance = new Chart(ctx, {
        type: 'line', // 折れ線グラフに変更
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Times',
                    data: times,
                    backgroundColor: 'rgba(190, 150, 140, 0.2)',
                    borderColor: 'rgba(150, 130, 120, 1)',
                    borderWidth: 1,
                    fill: true, // 線の下を塗りつぶす
                    pointBackgroundColor: 'rgba(150, 130, 120, 1)', // 点の色
                    pointBorderColor: 'rgba(150, 130, 120, 1)', // 点の枠の色
                    pointRadius: 1.5, // 点の半径を小さく
                    pointHoverRadius: 2.5, // ホバー時の点の半径
                    pointStyle: 'circle', // 点のスタイル
                    showLine: true, // 線を表示
                    tension: 0.4 // 線の滑らかさ
                },
                {
                    label: 'Cumulative Times',
                    data: cumulativeTimes,
                    backgroundColor: 'rgba(140, 190, 140, 0.2)',
                    borderColor: 'rgba(120, 150, 120, 1)',
                    borderWidth: 1,
                    fill: true, // 線の下を塗りつぶす
                    pointBackgroundColor: 'rgba(120, 150, 120, 1)', // 点の色
                    pointBorderColor: 'rgba(120, 150, 120, 1)', // 点の枠の色
                    pointRadius: 1.5, // 点の半径を小さく
                    pointHoverRadius: 2.5, // ホバー時の点の半径
                    pointStyle: 'circle', // 点のスタイル
                    showLine: true, // 線を表示
                    tension: 0.4 // 線の滑らかさ
                },
                {
                    label: 'Average Time',
                    data: averageTimes,
                    backgroundColor: 'rgba(0, 0, 0, 0)', // 塗りつぶしなし
                    borderColor: 'rgba(100, 100, 100, 1)',
                    borderWidth: 1,
                    fill: false, // 線の下を塗りつぶさない
                    pointRadius: 0, // 点を表示しない
                    borderDash: [5, 5] // 破線にする
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

function getLabelsAndTimes(data, listName) {
    var labels = [];
    var times = [];
    var cumulativeTimes = [];
    var cumulativeSum = 0;
    var totalSum = 0;

    data.studyLogs.forEach(function(studyLog) {
        labels.push(new Date(studyLog.date).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }));
        times.push(studyLog.time);
        cumulativeSum += studyLog.time;
        cumulativeTimes.push(cumulativeSum);
        totalSum += studyLog.time;
    });

    var averageTime = totalSum / times.length;
    var averageTimes = Array(times.length).fill(averageTime);

    console.log("Labels: ", labels);
    console.log("Times: ", times);
    console.log("Cumulative Times: ", cumulativeTimes);
    console.log("Average Times: ", averageTimes);

    return { labels, times, cumulativeTimes, averageTimes };
}
