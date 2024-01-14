const mongoose = require('mongoose')

const WorkoutSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : [true,"This field must be required"],
            maxlength : [40 , "the workout title cannot pass more than 40 character"],
            minlength : [3 , "the workout title cannot less than 3 character" ],
            unique : [true , "This Title has been used before"],
        },
        load : {
            type : Number,
            required : [true , "This field must be required"],
        },
        reps : {
            type : Number,
            required : [true,"This field must be required"],
            integer: [true,"This field must be a integer value"],
            min : [3,"The repetitions should be 3 times or more"]
        }
    },
)

WorkoutSchema.set('timestamps',true)

module.exports = mongoose.model('workout',WorkoutSchema)


