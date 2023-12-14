const mongoose = require('mongoose');
const { buffer } = require('stream/consumers');

// connect to MongoDB
mongoose.connect('',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// The post schema
const postSchema = new mongoose.Schema({
    postContent:{
        type: String,
        required: true,
    },
    postImage:{
        data: Buffer,
        contentType: String,
    },
    postTags:{
        type: [String],
        required: true,
    }
});

module.exports = mongoose.model('ost', postSchema)