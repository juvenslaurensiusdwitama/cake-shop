const customerRoute = require("express").Router();
const CustomerController = require("../controllers/CustomerController");

customerRoute.get("/", CustomerController.getCustomers);
customerRoute.post("/create", CustomerController.create);
customerRoute.get("/details/:id", CustomerController.getCustomerById);
customerRoute.delete("/delete/:id", CustomerController.delete);
customerRoute.put("/update/:id", CustomerController.update);

module.exports = customerRoute;
