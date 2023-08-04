const { Cake, Type, Customer } = require("../models");

class CakeController {
  static getCakes(req, res) {
    Cake.findAll({
      order: [["id", "asc"]],
      include: [Type, Customer],
    })
      .then((cakes) => {
        res.json(cakes);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static create(req, res) {
    const { name, image, desc, price, TypeId, CustomerId } = req.body;
    Cake.create({
      name,
      image,
      desc,
      price,
      TypeId,
      CustomerId,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static getCakeById(req, res) {
    const id = +req.params.id;
    console.log(req.params);
    Cake.findByPk(id)
      .then((result) => {
        result
          ? res.json(result)
          : res.json({
              message: `Cake id ${id} not found.`,
            });
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);
    Cake.destroy({
      where: { id },
    })
      .then((result) => {
        result === 1
          ? res.json({
              message: `Cake id ${id} has been deleted.`,
            })
          : res.json({
              message: `Cake has not been deleted.`,
            });
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);
    const { name, image, desc, price, TypeId, CustomerId } = req.body;
    Cake.update(
      {
        name,
        image,
        desc,
        price,
        TypeId,
        CustomerId,
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

module.exports = CakeController;
