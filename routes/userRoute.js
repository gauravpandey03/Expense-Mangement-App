const express= require('express')
const { model } = require('mongoose');
const { loginController, registerController } = require("../controllers/userController");
  

// router object 
const router = express.Router()

// router for Post || login user 
router.post("/login",loginController)


// router for Post || Register user 
router.post("/register",registerController)


module.exports=router;
