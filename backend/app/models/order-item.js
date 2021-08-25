const mongoose = require('mongoose');
const orderItemSchema = mongoose.Schema({
    itemQuantity: {
        type: Number,
        required: true
    },
    itemName: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true
    }
})
const OrderItem = mongoose.model('OrderItem', orderItemSchema)
module.exports = OrderItem;