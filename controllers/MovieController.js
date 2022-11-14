const db = require("../models");
const movies = db.movie;
const Op = db.Sequelize.Op; 

var categoryModel  = require('../models').category;  

const MovieController = {}; 


MovieController.getAll = (req, res) => {
    
    movies.findAll({include: [{ model:categoryModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies."
        });
      });
  };

MovieController.getById = (req, res) => {
    const id = req.params.id;

    movies.findByPk(id, {include: [{ model:categoryModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find movie with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving movies with id=" + id
        });
      });
  };

MovieController.create = (req, res) => {
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const newMovie = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    movies.create(newMovie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
      });
  };

MovieController.update = (req, res) => {
    const id = req.params.id;
  
    movies.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movie with id=" + id
        });
      });
  };

  MovieController.getByTitle = (req, res) => {
    movies.findAll({ where: { title: req.params.title } })
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


MovieController.delete = (req, res) => {
    const id = req.params.id;
  
    movies.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + id
        });
      });
  };

  MovieController.deleteAll = (req, res) => {
    movies.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Movies were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all movies."
        });
      });
  };

module.exports = MovieController;