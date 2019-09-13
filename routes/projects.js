const express = require('express');

const Projects = require('../models/projects');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find();
        res.status(200).json(projects);
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const projectAdded = await Projects.add(req.body);
        res.status(201).json(projectAdded);
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;