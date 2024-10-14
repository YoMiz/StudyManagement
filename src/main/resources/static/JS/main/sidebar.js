function toggleSidebar() {
    var sidebar = document.querySelector('.side-bar');
    if (sidebar.style.left === "-350px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-350px";
    }
}

document.getElementById('openSidebar').addEventListener('click', toggleSidebar);

$(document).ready(function () {
    // サイドバーの開閉機能
    var openSidebar = document.getElementById('openSidebar');
    if (openSidebar) {
        openSidebar.addEventListener('click', toggleSidebar);
    }

    // 入力チェック機能
    document.querySelectorAll('.side-container input[type="text"]').forEach(input => {
        input.addEventListener('input', checkInput);
    });

    // チェックボックスの更新機能
    $(document).on('input', '#myForm input[type="number"]', function () {
        updateCheckBox(this, 'check' + this.dataset.bookId, false);
        showUpdateButton();
    });

    $(document).on('change', '#myForm input[type="checkbox"]', function () {
        updateCheckBox(this, 'check' + this.id.replace('Done', ''), true);
        showUpdateButton();
    });
    fetchAndRenderGenreData('List');
    fetchAndRenderBookData('List');
    fetchAndRenderBookDoneData('List');
});