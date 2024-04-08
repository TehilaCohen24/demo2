const express=require("express")
const router=express.Router()
const Post=require('../models/Post')
const postController=require('../controllers/postController')

router.get("/",postController.getAllPosts)
router.get("/:_id",postController.getPostById)
router.post("/",postController.createNewPost)
router.delete("/",postController.deletePost)
router.put("/",postController.updatePost)

module.exports=router