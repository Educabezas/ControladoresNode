const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin.controller');

router.get('/admin', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.create);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.edit);
router.delete('/delete/:id', adminControllers.delete);

module.exports = router;