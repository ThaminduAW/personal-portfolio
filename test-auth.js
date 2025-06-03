const axios = require('axios');

const API_BASE = 'http://localhost:5000/api';

async function testAuth() {
  try {
    console.log('🚀 Testing Authentication System...\n');

    // Test health check
    console.log('1. Testing health check...');
    const healthRes = await axios.get(`${API_BASE}/health`);
    console.log('✅ Health check:', healthRes.data.message);

    // Test login with valid credentials
    console.log('\n2. Testing login with valid credentials...');
    const loginRes = await axios.post(`${API_BASE}/auth/login`, {
      email: 'thamindu.aw01@gmail.com',
      password: 'Th@m!nDhu@2001='
    });
    console.log('✅ Login successful:', loginRes.data.message);
    const token = loginRes.data.token;

    // Test token verification
    console.log('\n3. Testing token verification...');
    const verifyRes = await axios.get(`${API_BASE}/auth/verify`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ Token verified:', verifyRes.data.message);
    console.log('👤 User:', verifyRes.data.user);

    // Test logout
    console.log('\n4. Testing logout...');
    const logoutRes = await axios.post(`${API_BASE}/auth/logout`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ Logout successful:', logoutRes.data.message);

    // Test login with invalid credentials
    console.log('\n5. Testing login with invalid credentials...');
    try {
      await axios.post(`${API_BASE}/auth/login`, {
        email: 'invalid@email.com',
        password: 'wrongpassword'
      });
    } catch (error) {
      console.log('✅ Invalid login rejected:', error.response.data.message);
    }

    console.log('\n🎉 All authentication tests passed!');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

testAuth(); 