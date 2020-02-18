// Express Dependency
const express = require("express");

// Router
const carsRouter = require("./cars/carsRouter.js");

// Server
const server = express();

// API Endpoint
server.use(express.json());
server.use("/api/cars", carsRouter);

module.exports = server;
