const express = require('express')
const router = express.Router()
const { getAllWorkouts, getSingleWorkout, createWorkout,
updateWorkout, deleteWorkout } = require('../Controllers/workout')

router.route('/').get(getAllWorkouts).post(createWorkout)
router.route('/:id').get(getSingleWorkout).patch(updateWorkout).delete(deleteWorkout)


module.exports = router