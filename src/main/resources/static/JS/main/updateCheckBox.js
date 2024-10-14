function updateCheckBox(input, checkboxId, isDoneReading) {
    var checkbox = document.getElementById(checkboxId);
    var doneCheckbox = document.getElementById('Done' + checkboxId.replace('check', ''));
    var timeInput = document.querySelector('input[data-book-id="' + checkboxId.replace('check', '') + '"]');

    if (isDoneReading) {
        if (input.checked || (timeInput.value !== "" && parseFloat(timeInput.value) > 0.0)) {
            checkbox.checked = true;
        } else if (!input.checked && (timeInput.value === "" || parseFloat(timeInput.value) === 0.0)) {
            checkbox.checked = false;
        }
    } else {
        if ((input.value !== "" && parseFloat(input.value) > 0.0) || doneCheckbox.checked) {
            checkbox.checked = true;
        } else if (input.value === "" || parseFloat(input.value) === 0.0 && !doneCheckbox.checked) {
            checkbox.checked = false;
        }
    }
}

function showUpdateButton() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var updateElement = document.getElementById('update');
    var isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (isChecked) {
        updateElement.style.visibility = 'visible';
        updateElement.style.opacity = '1';
    } else {
        updateElement.style.visibility = 'hidden';
        updateElement.style.opacity = '0';
    }
}

$(document).on('input', '#myForm input[type="number"]', function () {
    updateCheckBox(this, 'check' + this.dataset.bookId, false);
    showUpdateButton();
});

$(document).on('change', '#myForm input[type="checkbox"]', function () {
    updateCheckBox(this, 'check' + this.id.replace('Done', ''), true);
    showUpdateButton();
});
