const express = require("express");
const app = express();

const path = require("path");

let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});