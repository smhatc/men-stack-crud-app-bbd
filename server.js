const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 3000;

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
        console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

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