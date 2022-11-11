const express = require('express');
const logger = require("pino")();
const createError = require("http-errors");
const config = require('./src/config/defaults');
const connectDb = require('./src/infrastructure/database/mongoose');
const cors = require('cors')

//firing the database 
connectDb();
// firing express
const app = express();

app.use(cors());
app.use(express.json());

// Firing the base route
app.get("/api/v1", (req, res, next)=>{
    res.status(200).json({
     message : "API v1 is running",
     env: config.env,
     projectName: config.projectName
    })
 })


// Not found route
app.use(async (req, res, next) => {
    next(createError.NotFound());
})

// catch application errors
app.use(async (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(config.port, ()=>{
    logger.info(`Server started on port ${config.port}`)
})
