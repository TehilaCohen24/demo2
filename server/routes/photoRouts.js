const express=require("express")
const router=express.Router()
const Photo=require('../models/Photo')
const photoController=require('../controllers/photoController')

router.get("/",photoController.getAllPhotos)
router.get("/:_id",photoController.getPhotoById)
router.post("/",photoController.createNewPhoto)
router.delete("/",photoController.deletePhoto)
router.put("/",photoController.updatePhoto)

module.exports=router