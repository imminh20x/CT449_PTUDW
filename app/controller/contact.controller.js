//create and save a new contact
exports.create = async (req, res) => {
  res.send({ message: "create handle" });
};

//Retrieve all contacts of a user from the database.
exports.findAll = async (req, res) => {
  res.send({ message: "findAll handle" });
};

//Find a single contact with a id
exports.findOne = async (req, res) => {
  res.send({ message: "findOne handle" });
};

//Update a contact by a id in the request
exports.update = async (req, res) => {
  res.send({ message: "update handle" });
};

// Delete a contact with the specified id in the request
exports.delete = async (req, res) => {
  res.send({ message: "delete handle" });
};
// Delete all contacts of a user from the database
exports.deleteAll = async (req, res) => {
  res.send({ message: "deleteAll handle" });
};
