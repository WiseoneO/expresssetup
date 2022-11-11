const router = require('express').Router();
const {allUsers} = require('../controllers/userController');

router.get('/user', allUsers);

module.exports = router;