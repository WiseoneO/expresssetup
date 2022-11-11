const userModel = require('../../../infrastructure/database/models/user');
const HTTP_STATUS = require('http-status-codes');
exports.allUsers = async(req, res)=>{
    try{
        const users = await userModel.find();
        if(!users || users.length == 0) throw Error ('No user found!');
        res.status(HTTP_STATUS.StatusCodes.OK).json({
            success : true,
            msg : 'Data retrived successfully',
            data : users
        })
    }catch(error){
        if(error instanceof Error){
            res.status(500).json({
                success : false,
                msg :`${error.message}`
            })
        }
    }
    
}