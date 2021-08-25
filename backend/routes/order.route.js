const router = require('express').Router();
const orderController = require('../app/controllers/order.controller')
const auth = require('../app/middlewares/auth')

router.post('/add', auth, orderController.addOrder)
router.patch('/:id', auth, orderController.addOrder)
router.delete('/add', auth, orderController.addOrder)
router.get('/all', auth, orderController.showAllOrders)
router.get('/:id', auth, orderController.showSingleOrder)
router.get('/get/count', auth, orderController.countOrders)
router.get('/get/userorders/:userId', auth, orderController.userOrders)
module.exports = router;