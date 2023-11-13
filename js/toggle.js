(function () {
    let block = document.querySelector('.orange__line_buttons');
    block.addEventListener('pointerover', (event) => {
        block.querySelectorAll('.orange__line_button').forEach((element) => {
            if (element === event.target) {
                if (element.classList.contains('active')) {
                    element.classList.remove('active');
                } else {
                    element.classList.add('active');
                }
            } else {
                element.classList.remove('active');
            }
        });
    });
})();
