const Photo = require("../models/Photo")

const getAllPhotos = async (req, res) => {
    const photos = await Photo.find().lean()
    if(!photos?.length)
        return res.status(400).json({message: 'No photos found'})
    return res.json(photos)
}

const getPhotoById = async (req, res) => {
    const {id} = req.params
    const photo = await Photo.findById(id).lean()
    if(!photo)
        return res.status(400).json({message: 'Photo not found'})
    res.json(photo)
}

const createNewPhoto = async (req, res) => {
    const {title, imageUrl} = req.body
    if(!imageUrl)
        return res.status(400).json({message: 'Fields are required'})
    const photo = await Photo.create({title, imageUrl})
    if(!photo)
        return res.status(201).json({message: 'Invalid photo'})
    return res.status(400).json({message: 'New photo created'})
}

const updatePhoto = async (req, res) => {
    const {_id, title, imageUrl} = req.body
    if(!_id || !imageUrl)
        return res.status(400).json({message: 'Fields are required'})
    const photo = await Photo.findById(_id).exec()
    if(!photo)
        return res.status(400).json({message: 'Photo not found'})
    photo.title = title
    photo.imageUrl = imageUrl
    const updatedPhoto = await photo.save()
    res.json(`Photo '${updatedPhoto.title}' updated successfully `)
}

const deletePhoto = async (req, res) => {
    const {id} = req.params
    const photo = await Photo.findById(id).exec()
    if(!photo)
        return res.status(400).json({message: 'Photo not found'})
    const result = await Photo.deleteOne()
    const reply = `Photo: '${photo.title}' ID: '${photo.id}' deleted successfully`
    res.json(reply)
}

module.exports = {getAllPhotos, getPhotoById, createNewPhoto, updatePhoto, deletePhoto}