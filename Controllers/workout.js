const workoutsModule = require('../modules/workout')
const { StatusCodes } = require('http-status-codes')


const getAllWorkouts = async (req,res) => {
    const workout = await workoutsModule.find({}).sort('-createdAt')
    res.status(StatusCodes.OK).json({workouts : workout})
}

const getSingleWorkout = async (req,res) => {
    const {id:workoutId} = req.params;
    const workout = await workoutsModule.findById(workoutId)
    if(!workout){
        return res.status(StatusCodes.NOT_FOUND).json({msg : `this workout does not exist with this Id : ${workoutId}`})
    }
    res.status(StatusCodes.OK).json(workout)
}

const createWorkout = async (req,res) => {
    const workout = await workoutsModule.create(req.body)
    res.status(StatusCodes.CREATED).json({msg : `The ${workout.title} workout has been created`})
}

const updateWorkout = async (req,res) => {
    const {id:workoutId} = req.params;
    const workout = await workoutsModule.findOneAndUpdate({_id :workoutId},req.body,{ new : true, runValidators : true })
    res.status(StatusCodes.OK).json(workout)
}

const deleteWorkout = async (req,res) => {
    const {id:workoutId} = req.params;
    const workout = await workoutsModule.findOneAndDelete(workoutId)
    res.status(StatusCodes.OK).json({msg : `The ${workout.title} workout has been successfully deleted ` , success : true})
}


module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}