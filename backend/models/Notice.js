const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    postContent: {
        type: String,
        required: false,
    },
    postImage: {
        data: Buffer,
        contentType: String,
    },
    postTags: {
        type: String,
        required: false,
    }
}, { timestamps: true })

module.exports = mongoose.model('notice', postSchema)