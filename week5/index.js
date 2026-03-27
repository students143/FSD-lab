const express = require("express");
const app = express();

// serve all html/js files
app.use(express.static(__dirname));

// routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/welcome.html");
});

// server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});