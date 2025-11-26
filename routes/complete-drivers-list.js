const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    
    console.log('Complete drivers list data received:', data);
    
    res.status(200).json({
      success: true,
      message: 'Complete drivers list data received successfully',
      data: data
    });
  } catch (error) {
    console.error('Error processing complete drivers list:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

module.exports = router;


