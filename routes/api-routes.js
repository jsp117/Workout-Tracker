// require models
const db = require("../models/Workout.js");

module.exports = function (app) {

    // get last workout
    app.get("/api/workouts", (req, res) => {
        db.find({})
            .then(workout => {
                res.json(workout);
            }).catch(err => {
                res.json(err);
            });
    });

    // add exercise
    app.put("/api/workouts/:id", (req, res) => {
        console.log("req", req);
        console.log("body", req.body);
        console.log("params", req.params.id);
        db.update({ "_id": req.params.id },
            {
                $push: { exercises: req.body }
            }).then(data => res.json(data))
            .catch(error => {
                res.json(error);
            });
    });

    // create workout
    app.post("/api/workouts", (req, res) => {
        db.create({})
            .then(workout => {
                res.json(workout);
            }).catch(err => {
                res.json(err);
            });
    });

    // get workouts in range
    app.get("/api/workouts/range", (req, res) => {
        db.find({})
            .then(workout => {
                res.json(workout)
            }).catch(err => {
                res.json(err);
            })
    });

}
