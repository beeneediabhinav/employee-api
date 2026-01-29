const express = require('express');
const router = express.Router();

let employees = [];

router.get('/', (req, res) => {
  res.json(employees);
});

router.post('/', (req, res) => {
  employees.push(req.body);
  res.status(201).json(req.body);
});

router.put('/:id', (req, res) => {
  employees[req.params.id] = req.body;
  res.json(req.body);
});

router.delete('/:id', (req, res) => {
  employees.splice(req.params.id, 1);
  res.sendStatus(204);
});

module.exports = router;
