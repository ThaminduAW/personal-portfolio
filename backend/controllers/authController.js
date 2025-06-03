const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

// Generate JWT Token
const generateToken = (email) => {
  return jwt.sign(
    { email, role: 'admin' },
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRE }
  );
};

// Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Check if email is in allowed admin emails
    const isValidEmail = config.ADMIN_EMAILS.includes(email.toLowerCase());
    
    if (!isValidEmail) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    if (password !== config.ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate token
    const token = generateToken(email);

    // Set cookie (optional for additional security)
    res.cookie('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        email,
        role: 'admin'
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login'
    });
  }
};

// Verify Token
const verifyToken = (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] || req.cookies?.adminToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET);
    
    res.status(200).json({
      success: true,
      message: 'Token is valid',
      user: {
        email: decoded.email,
        role: decoded.role
      }
    });

  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
};

// Admin Logout
const adminLogout = (req, res) => {
  try {
    // Clear cookie
    res.clearCookie('adminToken');
    
    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error during logout'
    });
  }
};

module.exports = {
  adminLogin,
  verifyToken,
  adminLogout
}; 