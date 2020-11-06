var path = require("path");

module.exports = function (app) {

    // home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // stats
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    // exercise
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

};