const express=require("express")
const router=express.Router()
const Todo=require('../models/Todo')
const todoController=require('../controllers/todoController')

router.get("/",todoController.getAllTodos)
router.get("/:_id",todoController.getTodoById)
router.post("/",todoController.createNewTodo)
router.delete("/",todoController.deleteTodo)
router.put("/",todoController.updateTodo)
router.put("/completed/:_id",todoController.updateTodoComplete)
module.exports=router