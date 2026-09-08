document.addEventListener("DOMContentLoaded", function () {

    let display = document.querySelector('input[type="text"]');
    let buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            let value = button.value;

            if (value === "=") {
                display.value = eval(display.value);
            }

            else {
                display.value = display.value + value;
            }

        });

    });

});