module.exports = {
  PORT: process.env.PORT || 5000,
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  JWT_SECRET: process.env.JWT_SECRET || 'your_super_secret_jwt_key_for_portfolio_admin_auth_2024',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '24h',
  
  // Admin credentials
  ADMIN_EMAILS: [
    'thamindu.aw01@gmail.com',
    'thamindu.aw@yahoo.com',
    'thamindu.aw@outlook.com'
  ],
  ADMIN_PASSWORD: 'Th@m!nDhu@2001='
};
