// Zod Validation Examples and Testing
import {
  userRegistrationSchema,
  productSchema,
  loginSchema,
  updateProfileSchema,
  blogPostSchema,
} from './schemas.js';

const testValidation = (name, schema, data) => {
  console.log(`\n${name}`);
  console.log('-'.repeat(60));
  const result = schema.safeParse(data);
  if (result.success) {
    console.log('✓ Validation successful!');
    console.log('Data:', JSON.stringify(result.data, null, 2));
  } else {
    console.log('✗ Validation failed:');
    result.error.issues.forEach(err => {
      console.log(`  - ${err.path.join('.')}: ${err.message}`);
    });
  }
};

console.log('\n📋 ZOD VALIDATION EXAMPLES\n');
console.log('='.repeat(60));

// Test 1: Valid User Registration
testValidation(
  '✅ TEST 1: VALID USER REGISTRATION',
  userRegistrationSchema,
  {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'SecurePass123!',
    age: 25,
  }
);

// Test 2: Invalid User Registration (weak password)
testValidation(
  '❌ TEST 2: INVALID USER - WEAK PASSWORD',
  userRegistrationSchema,
  {
    username: 'jane_doe',
    email: 'jane@example.com',
    password: 'weak',
    age: 20,
  }
);

// Test 3: Invalid User Registration (invalid email)
testValidation(
  '❌ TEST 3: INVALID USER - BAD EMAIL',
  userRegistrationSchema,
  {
    username: 'test_user',
    email: 'not-an-email',
    password: 'ValidPass123!',
    age: 30,
  }
);

// Test 4: Valid Product
testValidation(
  '✅ TEST 4: VALID PRODUCT',
  productSchema,
  {
    name: 'Laptop',
    description: 'High-performance gaming laptop',
    price: 1299.99,
    quantity: 15,
    category: 'Electronics',
    inStock: true,
  }
);

// Test 5: Invalid Product (negative price)
testValidation(
  '❌ TEST 5: INVALID PRODUCT - NEGATIVE PRICE',
  productSchema,
  {
    name: 'Phone',
    price: -500,
    quantity: 10,
    category: 'Electronics',
  }
);

// Test 6: Invalid Product (wrong category)
testValidation(
  '❌ TEST 6: INVALID PRODUCT - WRONG CATEGORY',
  productSchema,
  {
    name: 'Toy',
    price: 25.50,
    quantity: 50,
    category: 'Toys',
  }
);

// Test 7: Valid Login
testValidation(
  '✅ TEST 7: VALID LOGIN',
  loginSchema,
  {
    email: 'user@example.com',
    password: 'mypassword',
  }
);

// Test 8: Valid Blog Post
testValidation(
  '✅ TEST 8: VALID BLOG POST',
  blogPostSchema,
  {
    title: 'Getting Started with Zod',
    content: 'Zod is a TypeScript-first schema validation library that provides a clean, intuitive API for validating data structures.',
    tags: ['zod', 'validation', 'typescript'],
    published: true,
  }
);

// Test 9: Invalid Blog Post (no tags)
testValidation(
  '❌ TEST 9: INVALID BLOG POST - NO TAGS',
  blogPostSchema,
  {
    title: 'My Blog Post',
    content: 'This is a blog post content with more than 10 characters.',
    tags: [],
  }
);

// Test 10: Valid Update Profile (optional fields)
testValidation(
  '✅ TEST 10: VALID UPDATE PROFILE (OPTIONAL FIELDS)',
  updateProfileSchema,
  {
    name: 'John Smith',
    phone: '9876543210',
  }
);

// Test 11: Invalid Update Profile (bad phone)
testValidation(
  '❌ TEST 11: INVALID PROFILE - BAD PHONE NUMBER',
  updateProfileSchema,
  {
    phone: '123',
  }
);

// Test 12: Invalid User (age too young)
testValidation(
  '❌ TEST 12: INVALID USER - AGE TOO YOUNG',
  userRegistrationSchema,
  {
    username: 'teen_user',
    email: 'teen@example.com',
    password: 'ValidPass123!',
    age: 16,
  }
);

console.log('\n' + '='.repeat(60));
console.log('✅ ALL TESTS COMPLETED!\n');
