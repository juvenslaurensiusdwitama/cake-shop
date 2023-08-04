const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
  res.json({
    message: "Home Page",
  });
});

const cakeRoute = require("./cakes");
const customerRoute = require("./customers");
const typeRoute = require("./types");

route.use("/cakes", cakeRoute);
route.use("/customers", customerRoute);
route.use("/types", typeRoute);

module.exports = route;
