const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);

router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({
    msg: 'Welcome to the protected dashboard!',
    user: req.user
  });
});


module.exports = router;
