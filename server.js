const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const morgan = require("morgan");
const app = express();
const port = 5000;

// CONTROLLERS
const businessController = require("./controllers/businessControllers");

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
        console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

// ROUTES
app.get("/", (req, res) => {
        res.render("index.ejs");
});

app.use("/businesses", businessController);

// STARTING THE SERVER
app.listen(port, (req, res) => {
        console.log(`Server is listening on port ${port}.`);
});