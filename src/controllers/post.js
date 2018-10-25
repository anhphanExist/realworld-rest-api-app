const Post = require('../models/Post')

exports.createPost = (req, res) => {
    const defaultArgs = {
        title: ''
    }

    const {title} = Object.assign({}, defaultArgs, req.body)
    console.log('New post with title', title)

    if (!title) {
        return res.send({
            success: false,
            error: 'Please enter post title.'
        })
    }

    const post = new Post({
        title,
    })

    post.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(error => {
        res.status({
            success: false,
            error: error.message
        })
    })
}

exports.getAllPosts = (req, res) => {
    Post.find()
    .then(posts => {
        res.send({
            success: true,
            docs: posts,
        })
    })    
    .catch(error => {
        res.status({
            success: false,
            error: error.message
        })
    })
}
