$(document).ready(function () {
    fetchGenreData('List');
    fetchBookData('List');
    fetchBookDoneData('List');
});

function changeList(listName) {
    fetchGenreData(listName);
    fetchBookData(listName);
    fetchBookDoneData(listName);
}
