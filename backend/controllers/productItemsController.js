const AddProduct = require("../schema/productItemsSchema");

const newProduct = (req, res, next) => {

    console.log(req.body)
    // Validate request
    if (!req.body.Name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Tutorial
    const productitemsschema = new AddProduct({
        Name: req.body.Name,
        Description: req.body.Description,
        Categories: req.body.Categories
    });

    productitemsschema.save(productitemsschema).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
};


//getdata

const getAllOrder = (req, res) => {
  
    AddProduct.find()
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
//update

const updateProductItems= (req, res) => {
  console.log(req.body);
        if (req.body.Name == null) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    const id = req.params.id;
  
    AddProduct.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

const deleteProductItems = (req, res) => {
  const id = req.params.id;

  AddProduct.findByIdAndRemove(id)
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
    newProduct,
    getAllOrder,
    updateProductItems,
    deleteProductItems
};