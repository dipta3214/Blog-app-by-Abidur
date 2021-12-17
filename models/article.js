const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
    {
        title: {type: String, required: true},
        content: {type: String , required: true},
        image: {type: String},
        category: {type: String, required: true},
        user_id: {type: Schema.Types.ObjectId, ref: 'users'}
    },
    { timestamps: true }
)

module.exports = mongoose.model('articles', Article)