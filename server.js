const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const newDriversRouter = require('./routes/new-drivers');
const generatedReportRouter = require('./routes/generated-report');
const completeDriversListRouter = require('./routes/complete-drivers-list');

app.use('/api/new-drivers', newDriversRouter);
app.use('/api/generated-report', generatedReportRouter);
app.use('/api/complete-drivers-list', completeDriversListRouter);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Nova Partner API',
    endpoints: [
      'POST /api/new-drivers',
      'POST /api/generated-report',
      'POST /api/complete-drivers-list'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


