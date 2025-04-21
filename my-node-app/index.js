const express = require('express');
const app = express();
const port = 3000;
 
// Middleware to parse JSON requests
app.use(express.json());
 
// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Node.js World!');
});
 
// Example POST route
app.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});
 
// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
