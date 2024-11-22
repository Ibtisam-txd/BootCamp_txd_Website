import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import verifyToken from "../middleware/validation.middleware.js";
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
    try {
      const { email, password, username } = req.body;
  
      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // User login
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ email: user.email }, 'secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Get user details
  router.get('/user', verifyToken, async (req, res) => {
    try {
      const user = await User.findOne({ email: req.user.email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ username: user.username, email: user.email });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  export default router;