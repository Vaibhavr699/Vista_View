const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/auth');


router.use(authMiddleware.authenticateToken);

router.post('/', taskController.createTask);

router.get('/:id', taskController.getTaskById);

router.get('/', taskController.getTasksByUserId);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;