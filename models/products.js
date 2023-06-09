const mongoose = require('../utils/db')

const objectSchema = mongoose.Schema({
    // https://stackoverflow.com/questions/57151028/how-to-fix-validationerror-users-validation-failed-name-path-name-is-requ
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    relevance: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Providers',
        required: true
    }
})


const Products = mongoose.model('products', objectSchema);

module.exports = Products;