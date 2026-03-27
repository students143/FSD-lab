function validateLogin() {
    var u = document.getElementById("user").value;
    var p = document.getElementById("pass").value;

    if (u == "" || p == "") {
        alert("All fields required");
        return false;
    }

        window.location = "welcome.html";
        return false;
}
