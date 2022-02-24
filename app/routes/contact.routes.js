const express = require("express");
const {create, findAll, findOne, update, deleteAll, deleteOne} = require("../controllers/contact.controller");

module.exports = (app) => {
  const router = express.Router();
  //create a new contact
  router.post("/", create);

  //retrieve all contacts
  router.get("/", findAll);

  // //retrieve all favorite contacts
  router.get("/favorite", findAllFavorite);

  // // //retrieve a single contact with id
  router.get("/:id", findOne);

  // // //update a contact with id
  router.put("/:id", update);

  // // //delete a contact with id
  router.delete("/:id", deleteOne);

  // // //delete all contacts
  router.delete("/", deleteAll);

  app.use("/api/contacts", router);
};
