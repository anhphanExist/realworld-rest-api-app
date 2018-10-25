const {Schema} = require('mongoose')
const connection = require('../database')

const postSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },

    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = connection.model('Post', postSchema)
