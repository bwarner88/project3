const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes");
const db = require("./app_api/models");
const routes = require("./app_api/routes/index.routes");

const app = express();
const PORT = process.env.PORT || 8080;

// BODY PARSER FOR AJAX REQEUESTS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// STATIC ASSETS
app.use(express.static("client/build"));

// ROUTING FOR API
app.use("/api", routes);


db.Sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log(`Listening to ${PORT}`);
    });
});