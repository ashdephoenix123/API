const mongoose = require('mongoose')

const allProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, 'Price must be provided']
    },
    featured:  {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum : {
            values: ['apple', 'samsung', 'dell', 'mi'],
            message: `{VALUE} is not supported`
        }
    }
})

const AllProduct = mongoose.model('AllProduct', allProductsSchema)

module.exports = AllProduct;