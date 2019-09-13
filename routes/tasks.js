const express = require('express');

const Tasks = require('../models/tasks');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.find();
        res.status(200).json(tasks);
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const taskAdded = await Tasks.add(req.body);
        res.status(201).json(taskAdded);
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;