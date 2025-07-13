const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.get("/", (req, res) => {
        res.render("index.ejs");
});

// STARTING THE SERVER
app.listen(port, (req, res) => {
        console.log(`Server is listening on port ${port}.`);
});