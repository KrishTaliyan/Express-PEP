// Zod Schema Definitions
import { z } from 'zod';

// User Registration Schema
export const userRegistrationSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be at most 30 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  
  email: z
    .string()
    .email('Invalid email address'),
  
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one digit')
    .regex(/[!@#$%^&*]/, 'Password must contain at least one special character (!@#$%^&*)'),
  
  age: z
    .number()
    .int('Age must be a whole number')
    .min(18, 'Must be at least 18 years old')
    .max(120, 'Invalid age'),
});

// Product Schema
export const productSchema = z.object({
  name: z
    .string()
    .min(1, 'Product name is required')
    .max(100, 'Product name is too long'),
  
  description: z
    .string()
    .max(500, 'Description is too long')
    .optional(),
  
  price: z
    .number()
    .positive('Price must be a positive number')
    .multipleOf(0.01, 'Price must have at most 2 decimal places'),
  
  quantity: z
    .number()
    .int('Quantity must be a whole number')
    .nonnegative('Quantity cannot be negative'),
  
  category: z
    .enum(['Electronics', 'Clothing', 'Food', 'Books', 'Other'], {
      errorMap: () => ({ message: 'Invalid category' })
    }),
  
  inStock: z
    .boolean()
    .default(true),
});

// Login Schema
export const loginSchema = z.object({
  email: z
    .string()
    .email('Invalid email address'),
  
  password: z
    .string()
    .min(1, 'Password is required'),
});

// Update Profile Schema
export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .optional(),
  
  phone: z
    .string()
    .regex(/^\d{10}$/, 'Phone number must be 10 digits')
    .optional(),
  
  address: z
    .string()
    .max(200, 'Address is too long')
    .optional(),
});

// Blog Post Schema
export const blogPostSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be at most 200 characters'),
  
  content: z
    .string()
    .min(10, 'Content must be at least 10 characters')
    .max(5000, 'Content is too long'),
  
  tags: z
    .array(z.string())
    .min(1, 'At least one tag is required')
    .max(10, 'Maximum 10 tags allowed'),
  
  published: z
    .boolean()
    .default(false),
});
