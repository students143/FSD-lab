const express = require("express");
const bodyParser = require("body-parser");

require("./database");
const User = require("./models/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// SIGNUP
app.post("/signup", async (req, res) => {
    const { username, password, profession } = req.body;

    const user = new User({ username, password, profession });
    await user.save();

    res.send("Signup successful! <a href='login.html'>Login</a>");
});

// LOGIN
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (user) {
        res.redirect(`/welcome.html?username=${user.username}&profession=${user.profession}`);
    } else {
        res.send("Invalid login");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));