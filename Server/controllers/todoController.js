const Todo = require("../models/Todo")

const getAllTodos = async (req, res) => {
    const todos = await Todo.find().lean()
    if(!todos?.length)
        return res.status(400).json({message: 'No todo tasks found'}) 
    return res.json(todos)
}

const getTodoById = async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id).lean()
    if(!todo)
        return res.status(400).json({message: 'No todo task found'})
    res.json(todo)
}

const createNewTodo = async (req, res) => {
    const {title, tags, completed} = req.body
    if(!title)
        return res.status(400).json({message: 'Fields are required'})
    const todo = await Todo.create({title, tags, completed})
    if(todo)
        return res.status(201).json({message: 'New todo task created'})
    else
        return res.status(400).json({message: 'Invalid task'})
}

const updateTodo = async (req, res) => {
    const {_id, title, tags, completed} = req.body
    if(!_id || !title)
        return req.status(400).json({message: 'Fields are required'})
    const todo = await Todo.findById(_id).exec()
    if(!todo)
        return res.status(400).json({message: 'Task not found'})
    todo.title = title
    todo.tags = tags
    todo.completed = completed
    const updatedTodo = await todo.save()
    res.json(`'${updatedTodo.title}' updated successfully`)
}

const deleteTodo = async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id).exec()
    if(!todo)
        return res.status(400).json({message: 'Task not found'})
    const result = await todo.deleteOne()
    const reply = `Todo: '${todo.title}' ID: '${todo.id}' deleted successfully`
    res.json(reply)
}

const updateTodoCompleted = async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id).exec()
    if(!todo)
        return res.status(400).json({message: 'Task not found'})
    todo.completed = !todo.completed
    const updatedTodo = await todo.save()
    return res.json({message: `Todo '${todo.title}' updated to completed: ${todo.completed} successfully`})
}

module.exports = {getAllTodos, getTodoById, createNewTodo, updateTodo, deleteTodo, updateTodoCompleted}