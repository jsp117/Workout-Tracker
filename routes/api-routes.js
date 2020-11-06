// require models
const db = require("../models/Workout.js");

module.exports = function (app) {

    // get last workout
    app.get("/api/workouts", (req, res) => {
        db.find()
            .then(workout => {
                res.json(workout);
            }).catch(err => {
                res.json(err);
            });
    });

    // add exercise
    app.get("/api/workouts/:id", (req, res) => {

    });

    // create workout
    app.post("/api/workouts", ({ body }, res) => {
        
    });

    // get workouts in range
    app.post("/api/workouts/range", (req, res) => {
       
    });

}
