const cakeRoute = require("express").Router();
const CakeController = require("../controllers/CakeController");

cakeRoute.get("/", CakeController.getCakes);
cakeRoute.post("/create", CakeController.create);
cakeRoute.get("/details/:id", CakeController.getCakeById);
cakeRoute.delete("/delete/:id", CakeController.delete);
cakeRoute.put("/update/:id", CakeController.update);

module.exports = cakeRoute;
