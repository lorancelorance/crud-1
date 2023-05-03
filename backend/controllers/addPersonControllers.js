const AddPerson = require("../schema/addPersonSchema");

const newPerson = (req, res, next) => {

    console.log(req.body)
    // Validate request
    if (!req.body.Name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Tutorial
    const addpersonschema = new AddPerson({
        Name: req.body.Name,
        Email: req.body.Email
    });

    addpersonschema.save(addpersonschema).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
};


//getdata


const getAllPerson = (req, res) => {
  
    AddPerson.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };



//update data

const updateAllPerson = (req, res) => {
  console.log(req.body);
        if (req.body.Name == null) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    const id = req.params.id;
  
    AddPerson.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };


  //delete

const deleteAllOrder = (req, res) => {
  const id = req.params.id;

  AddPerson.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};



module.exports = {
    newPerson,
    getAllPerson,
    updateAllPerson,
    deleteAllOrder
};