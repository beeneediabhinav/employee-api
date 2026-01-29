const express = require('express');
const employeeRoutes = require('../routes/employees');

const app = express();
app.use(express.json());

app.use('/employees', employeeRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
