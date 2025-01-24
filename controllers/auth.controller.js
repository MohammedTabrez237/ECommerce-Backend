// /**
//  * I need to write the controller/logic to register a user
//  */
const bcrypt = require("bcryptjs");
const user_model = require("../models/user.model")
exports.signup = async (req, res)=>{

     /**
      * logic to create the user account
      */
     //1. read the request body
    const request_body =req.body           //<= this will get me the request body in the form of js object
    
//     //2. Insert the data in the users' collection in MongoDB
     const userObj={
        name:request_body.name,
        userId:request_body.userId,
        email:request_body.email,
        userType:request_body.userType,
        password:bcrypt.hashSync(request_body.password,8)
    }

     try{
        const user_created = await user_model.create(userObj)
        /**
          * Return this user
        */
        res.status(201).send(user_created)

    }catch(err){
        console.log("Error while registering user(signup)",err)
        res.status(500).send({
            message : "Some error happened while registering the user"
        })
    }


    //3. return the response back to the user
}