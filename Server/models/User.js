const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:String
    }
},{
    timestamps:true
})

module.exports = mongoose.model('user', UserSchema)