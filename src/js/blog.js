const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        default: 'New title ' + Date.now()
    },
    text: {
        type: String,
        required: true,
        default: 'New text'
    },
    author: {
        type: String,
        required: true,
        default: 'New author'
    }
});

blogSchema.methods.createNew = function (obj, callback) {
    return this.model('Blog').insert(obj, callback);
};

blogSchema.statics.findByAuthor = function (author, cb) {
    return this.find({author: new RegExp(author, 'i')}, cb);
};

blogSchema.methods.findByTitle = function (callback) {
    return this.model('Blog').find({title: this.title}, callback);
};

blogSchema.methods.findAllBlogs = function (callback) {
    return this.model('Blog').find({}, callback);
};

exports.Blog = mongoose.model('Blog', blogSchema);