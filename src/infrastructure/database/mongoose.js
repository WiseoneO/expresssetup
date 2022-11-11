const config = require("../../config/defaults");
const logger = require("pino")();
const mongoose = require("mongoose");

const connectDB =  async ()=>{
    try{
        logger.info(`Connecting to MongDB database ...`);
        await mongoose.connect(config.localMongod,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        logger.info("MongoDB connected Successfully.");
    }catch(error){
        logger.info('Error while connecting to the database. Try again...');
        
    }
}

module.exports = connectDB