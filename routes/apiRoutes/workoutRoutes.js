const router = require("express").Router();
const Workout = require("../../models/workout");

//Get Workout
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ]);
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to update workout
router.put("/:id", async ({ params, body }, res) => {
  
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    );
    res.json(updatedWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to create exercise
router.post("/", async ({ body }, res) => {
  try {
    const newWorkout = await Workout.create(body);
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

//route to combine duration of last 7 workouts
router.get("/range", async (req, res) => {
  console.log(res, "get duration");
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ]);
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;