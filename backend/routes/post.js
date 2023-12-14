const express = require('express')
const {
    getPosts,
    getPost,
    createPost
} = require('../controllers/postController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all posts
router.get('/', getPosts)

//GET particular posts 
router.get('/:id', getPost)

// POST a new post
router.post('/', createPost)



module.exports = router