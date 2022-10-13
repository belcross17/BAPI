const router = require('express').Router();
const thoughRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughRoutes);
router.use('/users', userRoutes);

module.exports = router;