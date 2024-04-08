const express=require("express")
const router=express.Router()
const User=require('../models/User')
const userController=require('../controllers/userController')

router.get("/",userController.getAllUsers)
router.get("/:_id",userController.getUserById)
router.post("/",userController.createNewUser)
router.delete("/",userController.deleteUser)
router.put("/",userController.updateUser)
module.exports=router