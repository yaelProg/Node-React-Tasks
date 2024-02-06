const User = require("../models/User")

const getAllUsers = async (req, res) => {
    const users = await User.find().lean()
    if(!users?.length)
        return res.status(400).json({message: 'No users found'})    
    res.json(users)
}

const getUserById = async (req, res) => {
    const {id} = req.params
    const user = await User.findById(id).lean()
    if(!user)
        return res.status(400).json({message: 'No user found'})
    res.json(user)
}

const createNewUser = async (req, res) => {
    const {name, username, email, address, phone} = req.body
    if(!username)
        return res.status(400).json({message: 'Fields are required'})
    const user = await User.create({name, username, email, address, phone})
    if(user)
        return res.status(201).json({message: 'New user created'})
    else
        return res.status(400).json({message: 'Invalid user'})
} 

const updateUser = async (req, res) => {
    const {_id, name, username, email, address, phone} = req.body
    if(!_id || !username)
        return res.status(400).json({message: 'Fields are required'})
    const user = await User.findById(_id).exec()
    if(!user)
        return res.status(400).json({message: 'User not found'})
    user.name = name
    user.username = username
    user.email = email
    user.address = address
    user.phone = phone
    const updatedUser = await user.save()
    res.json(`'${updatedUser.username}' updated successfully`)
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    const user = await User.findById(id).exec()
    if(!user)
        return res.status(400).json({message: 'User not found'})
    const result = await User.deleteOne()
    const reply = `User: '${user.username}' ID: '${user.id}' deleted successfully`
    res.json(reply)
}

module.exports = {getAllUsers, getUserById, createNewUser, updateUser, deleteUser}