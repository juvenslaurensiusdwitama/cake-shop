const { Customer } = require("../models");

class CustomerController {
  static getCustomers(req, res) {
    Customer.findAll()
      .then((customers) => {
        res.json(customers);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static create(req, res) {
    const { name, number, email, address } = req.body;
    Customer.create({
      name,
      number,
      email,
      address,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static getCustomerById(req, res) {
    const id = +req.params.id;
    console.log(req.params);
    Customer.findByPk(id)
      .then((result) => {
        result
          ? res.json(result)
          : res.json({
              message: `Customer id ${id} not found.`,
            });
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);
    Customer.destroy({
      where: { id },
    })
      .then((result) => {
        result === 1
          ? res.json({
              message: `Customer id ${id} has been deleted.`,
            })
          : res.json({
              message: `Customer has not been deleted.`,
            });
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);
    const { name, number, email, address } = req.body;
    Customer.update(
      {
        name,
        number,
        email,
        address,
      },
      {
        where: { id },
      }
    )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = CustomerController;
