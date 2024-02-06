const Post = require("../models/Post")

const getAllPosts = async (req, res) => {
    const posts = await Post.find().lean()
    if(!posts?.length)
        return res.status(400).json({message: 'No posts found'})    
    res.json(posts)
}

const getPostById = async (req, res) => {
    const {id} = req.params
    const post = await Post.findById(id).lean()
    if(!post)
        return res.status(400).json({message: 'No post found'})
    res.json(post)
}

const createNewPost = async (req, res) => {
    const {title, body} = req.body
    if(!title || !body)
        return res.status(400).json({message: 'Fields are required'})
    const post = await Post.create({title, body})
    if(post)
        return res.status(201).json({message: 'New post created'})
    else
        return res.status(400).json({message: 'Invalid post'})
} 

const updatePost = async (req, res) => {
    const {_id, title, body} = req.body
    if(!_id || !title || !body)
        return res.status(400).json({message: 'Fields are required'})
    const post = await Post.findById(_id).exec()
    if(!post)
        return res.status(400).json({message: 'Post not found'})
    post.title = title
    post.body = body
    const updatedPost = await post.save()
    res.json(`Post '${updatedPost.title}' updated successfully`)
}

const deletePost = async (req, res) => {
    const {id} = req.params
    const post = await Post.findById(id).exec()
    if(!post)
        return res.status(400).json({message: 'Post not found'})
    const result = await Post.deleteOne()
    const reply = `Post: '${post.title}' ID: '${post.id}' deleted successfully`
    res.json(reply)
}

module.exports = {getAllPosts, getPostById, createNewPost, updatePost, deletePost}