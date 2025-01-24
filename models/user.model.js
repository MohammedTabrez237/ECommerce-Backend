const mongoose = require("mongoose")

/**
 * user info or track of user
 * name
 * userId
 * passwd
 * usertype
 */

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 10,
        unique : true 
    },
    Phoneno:{
        type : Number,
        required : true,
        Length:10,
        unique:
    }
    userType : {
        type : String,
        default : "CUSTOMER",
        enum : ["CUSTOMER", "ADMIN"]
    }


},{timestamps : true,versionKey:false})

module.exports = mongoose.model("User", userSchema)