const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// GET student dashboard data
router.get('/dashboard', auth, async (req, res) => {
  try {
    res.json({
      msg: "Welcome to your dashboard! Entries will appear here when added by admin."
    });
  } catch (err) {
    res.status(500).json({ msg: "Error loading student data" });
  }
});


module.exports = router;
