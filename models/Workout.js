const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var value;
const WorkoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [
        {
            type: { type: String, trim: true },
            name: { type: String, trim: true },
            duration: { type: Number },
            weight: { type: Number },
            reps: { type: Number },
            sets: { type: Number },
            distance: {type: Number},
        }
    ]
},
    {
        // virtual field will be displayed on client side
        toJSON: {
            virtuals: true
        }
    }
);

// add virtual to schema - similar to custom method
WorkoutSchema.virtual("totalDuration").get(function () {
    // reduce(accumulator, currentvalue) returns sum of values
    return this.exercises.reduce((accumulator, currentval) => {
        return accumulator + currentval.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;