const {Router} = require('express');
const router = Router();


const {getUsers, createUser, getUserById, updateUser, deleteUser} = require('../controllers/users.controller');

router.route('/')
.get(getUsers)
.post(createUser)

router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

module.exports = router;