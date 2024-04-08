const { Model } = require("mongoose")
const Post = require("../models/Post")

const createNewPost=async (req,res)=>{
    const {title,body}=req.body
    if(!title){
    return res.status(400).json({message:'title is required'})
    }
    const post=await Post.create({title,body})
    if (post) { 
        return res.status(201).json({ message: 'New post created' })}
         else {
        return res.status(400).json({ message: 'Invalid post ' })}}

const getAllPosts=async (req,res)=>{
    const posts=await Post.find().lean()
    res.json(posts)
}
const updatePost=async(req,res)=>{
    const {_id,title,body}=req.body
    if(!_id||!title)
    {
        return res.status(400).json({message:'Fields are required'})
    }
    const post=await Post.findById(_id).exec()
    if(!post){
        return res.status(400).json({message:'Post not found'})
    }
    post.title=title
    post.body=body

    const updatePost=await post.save()
    res.json(`'${updatePost.title}' updated`)
}
const deletePost=async(req,res)=>{
    const{_id}=req.body
    const post=await Post.findById(_id).exec()
    if(!post){
        return res.status(400).json({message:'Post not found'})
    }
    const result=await post.deleteOne()
    const reply=`Post' ${result.title}' ID ${result._id} deleted`
    res.json(reply)
}

const getPostById = async (req, res) => {
const {_id} = req.params

const post = await Post.findById(_id).lean()

if (!post) {
return res.status(400).json({ message: 'No post found' })
}
res.json(post)
}


module.exports={createNewPost,getAllPosts,updatePost,deletePost,getPostById}