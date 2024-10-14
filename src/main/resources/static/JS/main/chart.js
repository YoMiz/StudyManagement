var genreChartInstance;
var bookChartInstance;
var bookDoneChartInstance;

function renderGenreChart(labels, times) {
    var chartElement = document.getElementById('genreChart');
    chartElement.style.maxWidth = '750px';
    chartElement.style.maxHeight = '400px';
    chartElement.style.width = '700px';
    chartElement.style.height = '350px';

    chartElement.style.display = 'block';
    chartElement.style.marginLeft = 'auto';
    chartElement.style.marginRight = 'auto';

    var ctx = chartElement.getContext('2d');

    if (genreChartInstance) {
        genreChartInstance.destroy();
    }

    genreChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sum of Time',
                data: times,
                backgroundColor: 'rgba(190, 150, 140, 0.2)',
                borderColor: 'rgba(150, 130, 120, 1)',
                borderWidth: 1
            }]
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
                }
            }
        }
    });
}
function renderBookChart(labels, times) {
    var chartElement = document.getElementById('bookChart');
    chartElement.style.maxWidth = '750px';
    chartElement.style.maxHeight = '400px';
    chartElement.style.width = '700px';
    chartElement.style.height = '350px';

    chartElement.style.display = 'block';
    chartElement.style.marginLeft = 'auto';
    chartElement.style.marginRight = 'auto';

    var ctx = chartElement.getContext('2d');

    if (bookChartInstance) {
        bookChartInstance.destroy();
    }

    bookChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sum of Time',
                data: times,
                backgroundColor: 'rgba(190, 150, 140, 0.2)',
                borderColor: 'rgba(150, 130, 120, 1)',
                borderWidth: 1
            }]
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
                }
            }
        }
    });
}
function renderBookDoneChart(labels, times) {
    var chartElement = document.getElementById('bookDoneChart'); // 修正点
    chartElement.style.maxWidth = '750px';
    chartElement.style.maxHeight = '400px';
    chartElement.style.width = '700px';
    chartElement.style.height = '350px';

    chartElement.style.display = 'block';
    chartElement.style.marginLeft = 'auto';
    chartElement.style.marginRight = 'auto';

    var ctx = chartElement.getContext('2d');

    if (bookDoneChartInstance) { // 修正点
        bookDoneChartInstance.destroy(); // 修正点
    }

    bookDoneChartInstance = new Chart(ctx, { // 修正点
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sum of Time',
                data: times,
                backgroundColor: 'rgba(190, 150, 140, 0.2)',
                borderColor: 'rgba(150, 130, 120, 1)',
                borderWidth: 1
            }]
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
                }
            }
        }
    });
}
