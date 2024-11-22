// middleware/uniqueValidation.middleware.js
import { User } from '../models/user.model.js';

const checkUniqueFields = async (req, res, next) => {
  try {
    const { email, username } = req.body;

    if (!email || !username) {
      return res.status(400).json({ error: 'Email and Username are required' });
    }

    // Check for existing email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already exists !!!' });
    }

    // Check for existing username
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // If no duplicates found, proceed to the next middleware/handler
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error during validation' });
  }
};

export default checkUniqueFields;
