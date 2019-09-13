const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

function find() {
    try {
        return db('resources');
    } catch (err) {
        console.log(err.message);
    }
}

async function add(resource) {
    try {
        return await db('resources').insert(resource);
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    find,
    add
}