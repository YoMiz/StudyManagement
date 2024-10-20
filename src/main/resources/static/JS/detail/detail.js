function fetchGenreDetailData(listName, dataId) {
  $.ajax({
    url: "/getGenreDetailData" + listName,
    type: "GET",
    data: { id: dataId }, 
    success: function(data) {
      renderDetailTableGenre(data.studyLogs);
      var { labels, times } = getGenreLabelsAndTimes(data.studyLogs);
      renderDetailChart(labels, times);
      console.log(data);
    },
    error: function(error) {
      console.error("Error occurred:" + error);
    }
  });
}
function fetchBookDetailData(listName, dataId) {
  $.ajax({
    url: "/getBookDetailData" + listName,
    type: "GET",
    data: { id: dataId }, 
    success: function(data) {
      renderDetailTableBook(data.studyLogs);
      var { labels, times } = getBookLabelsAndTimes(data.studyLogs);
      renderDetailChart(labels, times);
      console.log(dataId);
      console.log(data);
    },
    error: function(error) {
      console.error("Error occurred:" + error);
    }
  });
}
