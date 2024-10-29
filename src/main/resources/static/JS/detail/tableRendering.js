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
            '<td><span>' + new Date(studyLog.date).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }) + '</span></td>' +
            '<td>' + studyLog.bookName + '</td>' +
            '<td>' + studyLog.author + '</td>' +
            '<td><input type="number" class="time-box" data-book-id="' + studyLog.bookId + '" step="0.5" min="0" value="' + studyLog.time + '" name="studyLogs[' + i + '].time"/></td>' + // timeをインプットボックスに変更
            '<td>' + sumOfTimes[i] + '</td>' + // 累計時間を表示
            '</tr>' +
            '<tr><td colspan="5" style="min-height:27px; height:27px; text-align:center;">' +
            '<input type="text" class="comment-box" data-book-id="' + studyLog.bookId + '" value="' + (studyLog.comment || " ") + '" name="studyLogs[' + i + '].comment"/>' + // commentをインプットボックスに変更
            '</td></tr>';
        tableBody.append(row);

        // 初期値を保存
        initialValues[studyLog.bookId] = {
            time: studyLog.time,
            comment: studyLog.comment || " "
        };
    });

    // 共通の関数を呼び出す
    monitorInputChanges();
}

function renderDetailTableBook(data) {
    var tableBody = $('#tableBodyDetail');
    tableBody.empty();
    initialValues = {}; // 初期値をリセット
    var sumOfTimes = calculateSumOfTimes(data); // 累計時間を計算

    data.studyLogs.forEach(function(studyLog, i) { // iを追加
        var row = '<tr>' +
            '<td><span>' + new Date(studyLog.date).toLocaleDateString('ja-JP', { year: '2-digit', month: '2-digit', day: '2-digit' }) + '</span></td>' +
            '<td>' + studyLog.genreName + '</td>' +
            '<td><input type="number" class="time-box" data-book-id="' + studyLog.bookId + '" step="0.5" min="0" value="' + studyLog.time + '" name="studyLogs[' + i + '].time"/></td>' + // timeをインプットボックスに変更
            '<td>' + sumOfTimes[i] + '</td>' + // 累計時間を表示
            '</tr>' +
            '<tr><td colspan="5" style="min-height:27px; height:27px; text-align:center;">' +
            '<input type="text" class="comment-box" data-book-id="' + studyLog.bookId + '" value="' + (studyLog.comment || " ") + '" name="studyLogs[' + i + '].comment"/>' + // commentをインプットボックスに変更
            '</td></tr>';
        tableBody.append(row);

        // 初期値を保存
        initialValues[studyLog.bookId] = {
            time: studyLog.time,
            comment: studyLog.comment || " "
        };
    });

    // 共通の関数を呼び出す
    monitorInputChanges();
}

function calculateSumOfTimes(data) {
    var sumOfTimes = [];
    data.studyLogs.forEach(function(studyLog) {
        sumOfTimes.push(studyLog.sumOfTime);
    });
    return sumOfTimes;
}
