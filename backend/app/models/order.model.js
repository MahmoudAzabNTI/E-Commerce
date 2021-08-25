const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    orderItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'OrderItem',
            requierd: true,
        },
    ],
    address: {
        type: String,
        requried: true,
    },
    phone: {
        type: Number,
        requierd: true,
    },
    totalPrice: {
        type: Number,
    },
    status: {
        type: String,
        default: "Pending",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requierd: true,
    },
    dateOreded: {
        type: Date,
        default: Date.now
    }

})
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;