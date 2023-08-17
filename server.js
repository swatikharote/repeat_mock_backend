const jsonServer = require("json-server");
const express = require("express"); // Import the Express library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors"); // Import the CORS library
const port = process.env.PORT || 3001;

server.use(cors()); // Use the CORS middleware to allow all requests
server.use(express.json()); // Use the Express JSON middleware
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
