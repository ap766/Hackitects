const Notice = require('../models/Notice')
const mongoose = require('mongoose')

// get all posts - DONE
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// create new post
const createNotice = async (req, res) => {
  const {postContent, postImage, postTags} = req.body
  
  let emptyFields = []
  
  // if(!postContent) {
  // emptyFields.push('content')
  // }
  // if(!postTags) {
  // emptyFields.push('reps')
  // }
  // if(emptyFields.length > 0) {
  // return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  // }
  
  // add doc to db
  try {
  //const usn = req.user.usn
  const post= await Notice.create({postContent, postImage, postTags})
  res.status(200).json(post)
  } catch (error) {
  res.status(400).json({error: error.message})
  }
  }

// searching based on tags - DONE
const searchNotice = async(req, res) =>{

  const searchTags = req.query.tags;
  
    try {
      const posts = await Notice.find({ postTags: { $in: searchTags.split(',') } }).sort({ createdAt: -1 });
      // posts returns [] if posts for the keyword arent found
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
  getPosts,
  createNotice,
  searchNotice
}