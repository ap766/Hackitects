const express = require('express')
const {
    getPosts,
    createNotice,
    searchNotice
} = require('../controller/postcontroller')

//const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
//router.use(requireAuth)

// GET all posts
router.get('/', getPosts)

//GET particular posts 
router.get('/:id', searchNotice)

// POST a new post
router.post('/', createNotice)




module.exports = router