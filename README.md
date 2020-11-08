# Workout Tracker

## Description

This application is a workout tracker built with mongodb to store all data. It is designed as an exercise in building out the backend of an application when given a complete front end. The first step in building the backend was to create a model for MongoDB based off the front end and seed file. After completing this, I built the HTML routes to connect with the front end JS files, making  routes for the index, stats and exercise pages. The next step was to build out API routes to send data back to the front end when requested. When users load the page, they can see the last workout routine they inputted. This is accomplished on the backend through the MongoDB find method, which finds all data if not given any key: value pair to search for. Confirming that this worked, I moved on to the create workout route, which utilizes the create method to insert user inputted data into the database. The next step was to allow exercises to be inputted, which utilizes the MongoDB update method to push a new exercise into the array of exercises set up by the schema, where the id of the workout is the last used workout. When a user clicks new workout, a new workout routine is started with a different ID to hold exercises. In order to display the total duration of exercises in a given routine, I added a virtual to the schema that reduces the values of exercise.duration in the array to a sum of all inputted data.

![Usage](/public/assets/workout.gif)

## Table of Contents
* [Description](#description)
* [Deployed Link](#deployed-link)
* [Code Snippets](#code_snippets)
* [Built With](#built_with)
* [Author](#author)
* [License](#license)
* [Acknowledgements](#acknowledgements)


## Deployed Link

* [See Live Site](https://jsp-workout-buddy.herokuapp.com/)


## Code_Snippets

This code snippet displays the mongodb model used for this application. It includes an array of exercises that is modified each time a user enters a new exercise. The virtual added toward the end is used to add up all duration values to return the total duration of the workout. The toJSON statement allows the total duration to be displayed on the client side. 

```
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

```

This code snippet shows the backend route to add exercises. Because exercises is an array, we use the update mongodb method to select the current workout by id, and then the $push method to add the new exercise into the array. 

```
   // add exercise
    app.put("/api/workouts/:id", (req, res) => {
        // console.log("req", req);
        // console.log("body", req.body);
        // console.log("params", req.params.id);
        db.update({ "_id": req.params.id },
            {
                $push: { exercises: req.body }
            }).then(data => res.json(data))
            .catch(error => {
                res.json(error);
            });
    });
```



## Built_with
* JavaScript
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [MongoDB](https://www.mongodb.com/)
* [NodeJS](https://nodejs.org/en/)
* [jQuery](https://jquery.com/)
* [npm](https://www.npmjs.com/)
* [Morgan](https://www.npmjs.com/package/morgan)
* [Express](https://expressjs.com/)
* [Github](https://github.com/)
* [Heroku](https://dashboard.heroku.com/)

## Author
Jonathan SanPedro - Bachelors of Information Technology at Rutgers New Brunswick - Student at Berkeley Coding Bootcamp


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright &copy; [2020] [Jonathan J. SanPedro]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgements

* Thank you to my teachers Jerome, Manuel, Kerwin and Ryan

