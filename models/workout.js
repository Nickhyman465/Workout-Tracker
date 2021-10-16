const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
    day: { type: Date, default: Date.now },
    excersies: [{ 
        type: {
            type: String,
            trim = true,
            required: "Must select excersie type!"
        },

        name: { 
            type: String,
            trim = true,
            required: "You must name your exercise!"
        },
        
        duration: { 
            type: Number,
            required: "Must enter in an exercise duration!"
        },
        // Not required to complete the form
        distance: { 
            type: Number
        },
        weight: { 
            type: Number 
        },
        sets: { 
            type: Number 
        },
        Reps: { 
            type: Number 
        }
     }]

});

const workouts = mongoose.model("workouts", workoutSchema);

module.exports = workouts;