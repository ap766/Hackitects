const Post = require('../models/post')
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
const createWorkout = async (req, res) => {
  const {postContent, postImage, postTags} = req.body

  let emptyFields = []

  if(!postContent) {
    emptyFields.push('content')
  }
  if(!postTags) {
    emptyFields.push('reps')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const workout = await Workout.create({title, load, reps, user_id})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// searching based on tags - DONE
const searchNotice = async(req, res) =>{

  const searchTags = req.query.tags;
  
    try {
      const posts = await Post.find({ postTags: { $in: searchTags.split('#') } }).sort({ createdAt: -1 });
      // posts returns [] if posts for the keyword arent found
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
  getPosts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
  searchNotice
}