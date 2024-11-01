function renderDetailTableGenreHeader() {
	var tableHead = $('#tableHeadDetail');
	tableHead.empty();
	var headRow = '<tr><th>Date</th><th>Book</th><th>Author</th><th>Time</th><th>SUM</th></tr>';
	tableHead.append(headRow);
}

function renderDetailTableBookHeader() {
	var tableHead = $('#tableHeadDetail');
	tableHead.empty();
	var headRow = '<tr><th>Date</th><th>Genre</th><th>Time</th><th>SUM</th></tr>';
	tableHead.append(headRow);
}

var initialValues = {};

function renderDetailTableGenre(data) {
    var tableBody = $('#tableBodyDetail');
    tableBody.empty();
    initialValues = {}; // 初期値をリセット
    var sumOfTimes = calculateSumOfTimes(data); // 累計時間を計算

    data.studyLogs.forEach(function(studyLog, i) { // iを追加
        var row = '<tr>' +
            '<td hidden><input id="check-box-genre-' + i + '" type="checkBox" value="' + studyLog.logId + '"/>' + studyLog.logId + '</td>' +
            '<td><span>' + new Date(studyLog.date).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }) + '</span></td>' +
            '<td>' + studyLog.bookName + '</td>' +
            '<td>' + studyLog.author + '</td>' +
            '<td><input type="number" id="time-box-genre-' + i + '" class="time-box" data-book-id="' + studyLog.bookId + '" step="0.5" min="0" value="' + studyLog.time + '" name="studyLogs[' + i + '].time"/></td>' + // timeをインプットボックスに変更
            '<td>' + sumOfTimes[i] + '</td>' + // 累計時間を表示
            '</tr>' +
            '<tr><td colspan="5" style="min-height:27px; height:27px; text-align:center;">' +
            '<input type="text" id="comment-box-genre-' + i + '" class="comment-box" data-book-id="' + studyLog.bookId + '" value="' + (studyLog.comment || " ") + '" name="studyLogs[' + i + '].comment"/>' + // commentをインプットボックスに変更
            '</td></tr>';
        tableBody.append(row);

        // イベントリスナーを追加
        addEventListeners(i, 'genre');
    });
}
function renderDetailTableBook(data) {
    var tableBody = $('#tableBodyDetail');
    tableBody.empty();
    initialValues = {}; // 初期値をリセット
    var sumOfTimes = calculateSumOfTimes(data); // 累計時間を計算

    data.studyLogs.forEach(function(studyLog, i) { // iを追加
        var row = '<tr>' +
            '<td hidden><input id="check-box-book-' + i + '" type="checkBox" value="' + studyLog.logId + '"/>' + studyLog.logId + '</td>' +
            '<td><span>' + new Date(studyLog.date).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }) + '</span></td>' +
            '<td>' + studyLog.bookName + '</td>' +
            '<td><input type="number" id="time-box-book-' + i + '" class="time-box" data-book-id="' + studyLog.bookId + '" step="0.5" min="0" value="' + studyLog.time + '" name="studyLogs[' + i + '].time"/></td>' + // timeをインプットボックスに変更
            '<td>' + sumOfTimes[i] + '</td>' + // 累計時間を表示
            '</tr>' +
            '<tr><td colspan="5" style="min-height:27px; height:27px; text-align:center;">' +
            '<input type="text" id="comment-box-book-' + i + '" class="comment-box" data-book-id="' + studyLog.bookId + '" value="' + (studyLog.comment || " ") + '" name="studyLogs[' + i + '].comment"/>' + // commentをインプットボックスに変更
            '</td></tr>';
        tableBody.append(row);

        // イベントリスナーを追加
        addEventListeners(i, 'book');
    });
}

function calculateSumOfTimes(data) {
	var sumOfTimes = [];
	data.studyLogs.forEach(function(studyLog) {
		sumOfTimes.push(studyLog.sumOfTime);
	});
	return sumOfTimes;
}
