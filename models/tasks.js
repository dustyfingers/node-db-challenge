const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

function find() {
    try {
        return db('tasks');
    } catch (err) {
        console.log(err.message);
    }
}

async function add(task) {
    try {
        return await db('tasks').insert(task);
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    find,
    add
}