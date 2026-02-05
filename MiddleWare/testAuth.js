// Test script for authentication API
// Using built-in fetch (Node.js 18+)

const BASE_URL = 'http://localhost:5000';
let token = '';

async function test() {
  try {
    console.log('\n=== TEST 1: Login with Valid Credentials ===');
    const loginRes = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'krish', password: 'password123' })
    });
    const loginData = await loginRes.json();
    console.log('Status:', loginRes.status);
    console.log('Response:', JSON.stringify(loginData, null, 2));
    
    if (loginData.token) {
      token = loginData.token;
      console.log('✅ Token obtained:', token.substring(0, 20) + '...');
    }

    console.log('\n=== TEST 2: Access Protected Route with Valid Token ===');
    const profileRes = await fetch(`${BASE_URL}/profile`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const profileData = await profileRes.json();
    console.log('Status:', profileRes.status);
    console.log('Response:', JSON.stringify(profileData, null, 2));

    console.log('\n=== TEST 3: Access Protected Route WITHOUT Token ===');
    const noTokenRes = await fetch(`${BASE_URL}/profile`);
    const noTokenData = await noTokenRes.json();
    console.log('Status:', noTokenRes.status);
    console.log('Response:', JSON.stringify(noTokenData, null, 2));

    console.log('\n=== TEST 4: Access with Invalid Token ===');
    const invalidTokenRes = await fetch(`${BASE_URL}/profile`, {
      headers: { 'Authorization': 'Bearer invalid.token.here' }
    });
    const invalidTokenData = await invalidTokenRes.json();
    console.log('Status:', invalidTokenRes.status);
    console.log('Response:', JSON.stringify(invalidTokenData, null, 2));

    console.log('\n=== TEST 5: Get Protected Data ===');
    const dataRes = await fetch(`${BASE_URL}/data`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const dataData = await dataRes.json();
    console.log('Status:', dataRes.status);
    console.log('Response:', JSON.stringify(dataData, null, 2));

    console.log('\n=== TEST 6: Update Profile ===');
    const updateRes = await fetch(`${BASE_URL}/profile`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'Krish Updated', email: 'krish.new@example.com' })
    });
    const updateData = await updateRes.json();
    console.log('Status:', updateRes.status);
    console.log('Response:', JSON.stringify(updateData, null, 2));

    console.log('\n=== TEST 7: Login with Invalid Credentials ===');
    const invalidLoginRes = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'krish', password: 'wrongpassword' })
    });
    const invalidLoginData = await invalidLoginRes.json();
    console.log('Status:', invalidLoginRes.status);
    console.log('Response:', JSON.stringify(invalidLoginData, null, 2));

    console.log('\n✅ All tests completed!\n');
  } catch (error) {
    console.error('❌ Test Error:', error.message);
  }
}

test();
