require('dotenv').config()
require('express-async-errors')

// extra security packages
// const helmet = require('helmet');
// const xss = require('xss-clean');
// const rateLimiter = require('express-rate-limit');
const cors = require('cors');

const express = require('express')
const app = express()

const connectToDB = require('./database/connect')
const workoutRouter = require('./routes/workout')
const authRouter = require('./routes/userAuth')
const notFound = require('./middlewares/notFound')
const errorHandler_Middleware = require('./middlewares/error-handler')


app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:3000',  // replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));


app.use('/api/v1/workouts',workoutRouter)
app.use('/api/v1/auth',authRouter)

app.use("*",notFound)
app.use(errorHandler_Middleware)




const start = async () => {
    try {
        connectToDB(process.env.MONGO_URL)
        app.listen(process.env.PORT || 3030 , () => {
            console.log(`the server run on the PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()
