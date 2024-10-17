$(document).ready(function () {
    fetchAndRenderGenreData('List');
    fetchAndRenderBookData('List');
    fetchAndRenderBookDoneData('List');
});

function changeList(listName) {
    fetchAndRenderGenreData(listName);
    fetchAndRenderBookData(listName);
    fetchAndRenderBookDoneData(listName);
}
