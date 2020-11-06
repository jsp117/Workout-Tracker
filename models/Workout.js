const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = newSchema({
    day: { type: Date, default: Date.now },
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
        }
    ]

});

const Workout = mongoose.model("Workout", NoteSchema);

module.exports = Workout;