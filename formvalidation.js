let form = document.getElementById("form1");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let password = document.getElementById("pass").value;
    let conpass = document.getElementById("cpd").value;

    if (password !== conpass) {
        document.getElementById("error").innerText = "Password Not Matched";
        document.getElementById("error").style.color = "red";
    }
    else {
        document.getElementById("error").innerText = "Password Matched";
        document.getElementById("error").style.color = "green";
    }

});
