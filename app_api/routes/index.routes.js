const express = require('express');
const router = express.Router();
// API ROUTES
const userRoutes = require('./models/user.routes');
const itemRoutes = require('./models/item.routes');
const transRoutes = require('./models/transaction.routes');
const requestRoutes = require('./models/request.routes');

router.use('/user', userRoutes);
router.use('/item', itemRoutes);
router.use('/transaction', transRoutes);
router.use('/request', requestRoutes);

module.exports = router;
