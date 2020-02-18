const express = require("express");
const router = express.Router();
const db = require("../db-config");

router.get("/", (request, response) => {
  db("cars-dealer")
    .then(cars => {
      response.json(cars);
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (request, response) => {
  const { id } = request.params;
  db("cars-dealer")
    .where({ id })
    .first()
    .then(car => {
      response.json(car);
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ message: "Failed to retrieve car" });
    });
});

router.post("/", (request, response) => {
  const carInfo = request.body;
  db("cars-dealer")
    .insert(carInfo)
    .then(car => {
      response.status(201).json(car);
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ error: "Failed to add the car" });
    });
});

router.put("/:id", (request, response) => {
  const id = request.params.id;
  const changes = request.body;
  db("cars-dealer")
    .where({ id })
    .update(changes)
    .then(car => {
      response.status(200).json(car);
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ error: "Failed to update the car" });
    });
});

router.delete("/:id", (request, response) => {
  const id = request.params.id;
  db("cars-dealer")
    .where({ id })
    .del()
    .then(car => {
      response.status(200).json(car);
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ error: "Failed to delete the car" });
    });
});

module.exports = router;
