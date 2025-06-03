const nodemailer = require('nodemailer');

// Handle contact form submission
const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Here you would typically save to database and/or send email
    // For now, just return success
    res.status(200).json({
      success: true,
      message: 'Message sent successfully! Thank you for contacting us.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

module.exports = {
  submitContactForm
};
