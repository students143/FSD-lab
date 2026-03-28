const express = require("express");
const app = express();

app.get("/user", (req, res) => {
    res.json({
        username: "Harshu",
        email: "harshu@gmail.com",
        city: "Hyderabad",
        profession: "Student"
    });
});

app.listen(3000, () => console.log("Server running"));
const cors = require("cors");
app.use(cors());