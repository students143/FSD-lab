const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const SECRET = "mysecretkey";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// store user
let userData = {};

// SIGNUP
app.post("/signup", (req, res) => {
    userData = {
        username: req.body.username,
        password: req.body.password,
        profession: req.body.profession
    };
    res.send("Signup successful! <a href='login.html'>Login</a>");
});

// LOGIN
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (
        username === userData.username &&
        password === userData.password
    ) {
        const token = jwt.sign(userData, SECRET);
        res.redirect("/profile.html?token=" + token);
    } else {
        res.send("Invalid login");
    }
});

// MIDDLEWARE
function verifyToken(req, res, next) {
    const token = req.query.token;

    if (!token) return res.send("No token");

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.send("Invalid token");
        req.user = decoded;
        next();
    });
}

// PROTECTED DATA
app.get("/profile-data", verifyToken, (req, res) => {
    res.json(req.user);
});

app.listen(3000, () => console.log("Server running on port 3000"));