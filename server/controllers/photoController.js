const { Model } = require("mongoose")
const Photo = require("../models/Photo")

const createNewPhoto=async (req,res)=>{
    const {title,imageUrl}=req.body
    if(!title){
    return res.status(400).json({message:'title is required'})
    }
    const post=await Photo.create({title,imageUrl})
    res.json(post)
    if (post) { 
        return res.status(201).json({ message: 'New post created' })}
         else {
        return res.status(400).json({ message: 'Invalid post ' })}}

const getAllPhotos=async (req,res)=>{
    const posts=await Photo.find().lean()
    res.json(posts)
}
const updatePhoto=async(req,res)=>{
    const {_id,title,imageUrl}=req.body
    if(!_id||!title)
    {
        return res.status(400).json({message:'Fields are required'})
    }
    const post=await Photo.findById(_id).exec()
    if(!post){
        return res.status(400).json({message:'Photo not found'})
    }
    post.title=title
    post.imageUrl=imageUrl

    const updatePhoto=await post.save()
    res.json(`'${updatePhoto.title}' updated`)
}
const deletePhoto=async(req,res)=>{
    const{_id}=req.body
    const post=await Photo.findById(_id).exec()
    if(!post){
        return res.status(400).json({message:'Photo not found'})
    }
    const result=await post.deleteOne()
    const reply=`Photo' ${result.title}' ID ${result._id} deleted`
    res.json(reply)
}

const getPhotoById = async (req, res) => {
const {_id} = req.params

const post = await Photo.findById(_id).lean()

if (!post) {
return res.status(400).json({ message: 'No post found' })
}
res.json(post)
}


module.exports={createNewPhoto,getAllPhotos,updatePhoto,deletePhoto,getPhotoById}