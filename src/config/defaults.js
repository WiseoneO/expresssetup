const dotenv = require("dotenv");
dotenv.config()

const config = {
    port : process.env.PORT || 6000,
    localMongod : process.env.MONGODB_LOCAL_CONNECTION,
    liveMongod : process.env.MONGODB_LIVE_CONNECTION,
    env : process.env.NODE_ENV,
    projectName : process.env.PROJECT_NAME,

}

module.exports = config
