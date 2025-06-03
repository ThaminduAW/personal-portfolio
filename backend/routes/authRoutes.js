const express = require('express');
const router = express.Router();
const { adminLogin, verifyToken, adminLogout } = require('../controllers/authController');

// @route   POST /api/auth/login
// @desc    Admin login
// @access  Public
router.post('/login', adminLogin);

// @route   GET /api/auth/verify
// @desc    Verify admin token
// @access  Private
router.get('/verify', verifyToken);

// @route   POST /api/auth/logout
// @desc    Admin logout
// @access  Private
router.post('/logout', adminLogout);

module.exports = router; 