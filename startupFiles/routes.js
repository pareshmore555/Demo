const express = require('express');
const customer = require('../routes/customer');

const startRouting = (app) => {
    app.use(express.json());
    app.use(express.urlencoded());

    app.use('/customers', customer);

}

module.exports = {
    startRouting
}