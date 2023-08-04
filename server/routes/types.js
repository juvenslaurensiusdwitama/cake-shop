const typeRoute = require("express").Router();
const TypeController = require("../controllers/TypeController");

typeRoute.get("/", TypeController.getTypes);
typeRoute.post("/create", TypeController.create);
typeRoute.get("/details/:id", TypeController.getTypeById);
typeRoute.delete("/delete/:id", TypeController.delete);
typeRoute.put("/update/:id", TypeController.update);

module.exports = typeRoute;
