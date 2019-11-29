const express = require("express");
const SWController = require("./controllers/SWController");

const routes = new express.Router();

routes.get("/", (req, res) => {
  return res.json({
    name: "sw-backend",
    status: "up"
  });
});

// SW
routes.get("/api/json/SW", SWController.index);

module.exports = routes;
