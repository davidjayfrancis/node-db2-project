const express = require("express");
const db = require("./data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars").then(cars => {
    res.status(200).json(cars);
  });
});

router.post("/", (req, res) => {
  db("cars")
    .insert({
      VIN: req.body.VIN,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
      transmissionType: req.body.transmissionType,
      titleStatus: req.body.titleStatus
    })
    .then(car => {
      res.status(201).json(car);
    })
    .catch(err => res.status(500).json({ err: err }));
});
module.exports = router;
