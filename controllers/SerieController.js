const db = require("../models");
const series = db.serie;
const Op = db.Sequelize.Op;

var categoryModel  = require('../models').category;  

const SerieController = {}; 

SerieController.getAll = (req, res) => {
    
    series.findAll({include: [{ model:categoryModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unable to retrieve series."
        });
      });
  };

SerieController.getById = (req, res) => {
    const id = req.params.id;

    series.findByPk(id, {include: [{ model:categoryModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Unable to find serie with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to retrie serie with id=" + id
        });
      });
  };

SerieController.create = (req, res) => {
    if (!req.body.title) {
      res.status(400).send({
        message: "Please ensure to fulfil the information."
      });
      return;
    }
  
    const newSerie = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    series.create(newSerie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unable to create the serie."
        });
      });
  };

SerieController.update = (req, res) => {
    const id = req.params.id;
  
    series.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Serie has been updated successfully."
          });
        } else {
          res.send({
            message: `Unable to update serie with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to update serie with id=" + id
        });
      });
  };

  SerieController.getByTitle = (req, res) => {
    series.findAll({ where: { title: req.params.title } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unable to retrieve series."
        });
      });
  };

SerieController.delete = (req, res) => {
    const id = req.params.id;
  
    series.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Serie has been removed successfully!"
          });
        } else {
          res.send({
            message: `Unable to remove serie with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete serie with id=" + id
        });
      });
  };

  SerieController.deleteAll = (req, res) => {
    series.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} series have been removed successfully.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unable to delete all series."
        });
      });
  };

module.exports = SerieController;