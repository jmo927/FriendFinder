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

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);