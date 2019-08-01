const express = require("express");
const bodyParser = require("body-parser");

const appRoutes = require("./routes/app");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-with,Content-Type,Accept,Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,PUT,DELETE,OPTIONS"
    );

    console.log(req.url);
    console.log(req.body)
    next();
});

app.use("/aaaa", appRoutes);
app.use("/bbbb", appRoutes);
app.use("/cccc", appRoutes);
app.use("/*", (req, res, next) => {
    res.status(404).json({
        message: "Path not found"
    })
    next();
});

module.exports = app;
