const express = require('express')
const router = express.Router()

const post = require('./controllers/post')
router.post('/posts', post.createPost)
router.get('/posts', post.getAllPosts)

/**
 * Exports.
 */
module.exports = router
