const OrderItem = require('../models/order-item')
const Order = require('../models/order.model')
module.exports = {
    async addOrder(req, res){
        let orderItemIds = await Promise.all(req.body.orderItems.map(async orderItem => {
            
            let newOrderItem = new OrderItem({
                itemQuantity: orderItem.quantity,
                itemName: orderItem.productName,
                itemPrice: orderItem.productPrice,
            })
            newOrderItem = await newOrderItem.save();
            console.log(newOrderItem._id)
            return newOrderItem._id
        }))
        
        const orderItemsIdsResolved = await orderItemIds;
        const newOrder = new Order({
            orderItems: orderItemsIdsResolved,
            address: req.body.address,
            phone: req.body.phone,
            user: req.body.user
        })
        order = await newOrder.save()
    },
    async showAllOrders(req, res){

    },
    async showSingleOrder(req, res){

    },
    async editOrder(req, res){

    },
    async deleteOrder(req, res){

    },
    async countOrders(req, res){

    },
    async userOrders(req, rs){

    }


    
}