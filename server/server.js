const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React build
app.use(express.static(path.join(__dirname, '../build')));

// Routes
app.post('/api/contact', (req, res) => {
  const { name, companyName, email, service, description } = req.body;
  
  // Here you would typically save this to a database
  // For now, we'll just send back a success response
  console.log('Received contact form submission:', req.body);
  
  res.json({
    success: true,
    message: 'Thank you for your submission. We will contact you soon!'
  });
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
