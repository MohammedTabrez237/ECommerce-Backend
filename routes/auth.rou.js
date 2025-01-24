/**
 * POST 0.0.0.0:8888/ecomm1/api/v1/auth/signup
 * 
 * I need to intercept this
 * 
 */
const authController = require("../controllers/auth.controller")

module.exports = (app)=>{
    
    app.post("/ecomm1/api/v1/auth/signup",authController.signup)
    
}
