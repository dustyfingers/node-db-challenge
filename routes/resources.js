const express = require('express');

const Resources = require('../models/resources');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resources = await Resources.find();
        res.status(200).json(resources);
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const resourceAdded = await Resources.add(req.body);
        res.status(201).json(resourceAdded);
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;