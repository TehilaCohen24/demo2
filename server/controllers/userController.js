const { Model } = require("mongoose")
const User = require("../models/User")

const createNewUser=async (req,res)=>{
    const {name, userName, email, address, phone}=req.body
    if(!name){
    return res.status(400).json({message:'name is required'})
    }
    const user=await User.create({name, userName, email, address, phone})
    if (user) { 
        return res.status(201).json({ message: 'New user created' })}
    else {
        return res.status(400).json({ message: 'Invalid user ' })}}
const getAllUsers=async (req,res)=>{
    const users=await User.find().lean()
    res.json(users)
}
const updateUser=async(req,res)=>{
    const {_id,name, userName, email, address, phone}=req.body
    if(!_id||!name)
    {
        return res.status(400).json({message:'Fields are required'})
    }
    const user=await User.findById(_id).exec()
    if(!user){
        return res.status(400).json({message:'User not found'})
    }
    user.name=name
    user.userName=userName
    user.email=email
    user.address=address
    user.phone=phone

    const updateUser=await user.save()
    res.json(`'${updateUser.name}' updated`)
}
const deleteUser=async(req,res)=>{
    const{_id}=req.body
    const user=await User.findById(_id).exec()
    if(!user){
        return res.status(400).json({message:'User not found'})
    }
    const result=await user.deleteOne()
    const reply=`User' ${result.name}' ID ${result._id} deleted`
    res.json(reply)
}

const getUserById = async (req, res) => {
const {_id} = req.params

const user = await User.findById(_id).lean()

if (!user) {
return res.status(400).json({ message: 'No user found' })
}
res.json(user)
}


module.exports={createNewUser,getAllUsers,updateUser,deleteUser,getUserById}