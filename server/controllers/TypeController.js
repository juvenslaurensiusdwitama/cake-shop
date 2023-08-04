const { Type } = require("../models");

class TypeController {
  static getTypes(req, res) {
    Type.findAll()
      .then((types) => {
        res.json(types);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static create(req, res) {
    const { flavour } = req.body;
    Type.create({
      flavour,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static getTypeById(req, res) {
    const id = +req.params.id;
    console.log(req.params);
    Type.findByPk(id)
      .then((result) => {
        result
          ? res.json(result)
          : res.json({
              message: `Type id ${id} not found.`,
            });
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);
    Type.destroy({
      where: { id },
    })
      .then((result) => {
        result === 1
          ? res.json({
              message: `Type id ${id} has been deleted.`,
            })
          : res.json({
              message: `Type has not been deleted.`,
            });
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);
    const { flavour } = req.body;
    Type.update(
      {
        flavour,
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

module.exports = TypeController;
