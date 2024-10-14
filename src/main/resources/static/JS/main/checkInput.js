function checkInput() {
    var addBookInputs = document.querySelectorAll('.side-container input[type="text"]');
    var submitButton = document.getElementById('addBook');
    for (var i = 0; i < addBookInputs.length; i++) {
        if (addBookInputs[i].value === '') {
            submitButton.style.visibility = 'hidden';
            submitButton.style.opacity = '0';
            return;
        }
    }
    submitButton.style.visibility = 'visible';
    submitButton.style.opacity = '1';
}

document.querySelectorAll('.side-container input[type="text"]').forEach(input => {
    input.addEventListener('input', checkInput);
});
