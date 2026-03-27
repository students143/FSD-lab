function validateReg() {
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    var p = document.getElementById("pass").value;

    if (n == "" || e == "" || p == "") {
        alert("Fill all fields");
        return false;
    }

    alert("Registration Successful");
    window.location = "login.html";
    return false;
}