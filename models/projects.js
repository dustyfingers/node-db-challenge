const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

function find() {
    try {
        return db('projects');
    } catch (err) {
        console.log(err.message);
    }
}

async function add(project) {
    try {
        return await db('projects').insert(project);
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    find,
    add
}