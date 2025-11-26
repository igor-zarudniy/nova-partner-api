const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    
    console.log('Generated report data received:', data);
    
    res.status(200).json({
      success: true,
      message: 'Generated report data received successfully',
      data: data
    });
  } catch (error) {
    console.error('Error processing generated report:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

module.exports = router;


