const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    
    console.log('New drivers data received:', data);
    
    res.status(200).json({
      success: true,
      message: 'New drivers data received successfully',
      data: data
    });
  } catch (error) {
    console.error('Error processing new drivers:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

module.exports = router;


