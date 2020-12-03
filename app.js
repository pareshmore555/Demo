const express = require('express');
const { connectToDb } = require('./startupFiles/db');
const { startRouting } = require('./startupFiles/routes');
const { startServer } = require('./startupFiles/server');
const app = express();

startServer(app);

connectToDb()

startRouting(app);