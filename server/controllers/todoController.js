const { Model } = require("mongoose")
const Todo = require("../models/Todo")

const createNewTodo=async (req,res)=>{
    const {title,body,tags}=req.body
    if(!title||!body){
    return res.status(400).json({message:'Fields are required'})
    }
    const todo=await Todo.create({title,body,tags})
    if (todo) { 
        return res.status(201).json({ message: 'New todo created' })}
         else {
        return res.status(400).json({ message: 'Invalid todo ' })}}
       
const getAllTodos=async (req,res)=>{
    const todos=await Todo.find().lean()
    res.json(todos)
}
const updateTodo=async(req,res)=>{
    const {_id,title,body,tags}=req.body
    if(!_id||!title)
    {
        return res.status(400).json({message:'Fields are required'})
    }
    const todo=await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({message:'Todo not found'})
    }
    todo.title=title
    todo.tags=tags
    todo.body=body

    const updateTodo=await todo.save()
    res.json(`'${updateTodo.title}' updated`)
}
const deleteTodo=async(req,res)=>{
    const{_id}=req.body
    const todo=await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({message:'Todo not found'})
    }
    const result=await todo.deleteOne()
    const reply=`Todo' ${result.title}' ID ${result._id} deleted`
    res.json(reply)
}

const getTodoById = async (req, res) => {
const {_id} = req.params

const todo = await Todo.findById(_id).lean()

if (!todo) {
return res.status(400).json({ message: 'No todo found' })
}
res.json(todo)
}

const updateTodoComplete = async (req, res) => {
    const { _id } = req.params
    const todo = await Todo.findById(_id).exec()
    if (!todo) {
    return res.status(400).json({ message: 'Todo not found' })
    }
    todo.completed = !todo.completed
    const updatedTodo = await todo.save()
    res.json(`'${updatedTodo.title}' updated`)
    }



module.exports={createNewTodo,getAllTodos,updateTodo,deleteTodo,getTodoById,updateTodoComplete}