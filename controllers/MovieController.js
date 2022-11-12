// Creating movie controller. First step: import data model. 

const db = require("../models");
const movies = db.movie;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var categoryModel  = require('../models').category;  //Add for dependency response

const MovieController = {}; //Create the object controller

//CRUD end-points Functions

//GET all movies from database

MovieController.getAll = (req, res) => {
    
    movies.findAll({include: [{ model:categoryModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unable to retrieve movies, an error ocurred."
        });
      });
  };

//GET movies by Id from database

MovieController.getById = (req, res) => {
    const id = req.params.id;

    movies.findByPk(id, {include: [{ model:categoryModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Unable to find movies with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to find movies with id=" + id
        });
      });
  };



//CREATE a new movie in database

MovieController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Please fulfil the content."
      });
      return;
    }
  
    // Create a Movies
    const newMovie = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    // Save Movies in the database
    movies.create(newMovie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unable to create movie(s), an error ocurred."
        });
      });
  };


//UPDATE a movie from database
MovieController.update = (req, res) => {
    const id = req.params.id;
  
    movies.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie information has been updated succesfully."
          });
        } else {
          res.send({
            message: `Unable to update movie with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to update movie with id=" + id
        });
      });
  };

//GET movie by Title from database 
//FindByTitle

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

//DELETE a movie by Id from database
MovieController.delete = (req, res) => {
    const id = req.params.id;
  
    movies.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was removed successfully."
          });
        } else {
          res.send({
            message: `Unable to remove movie with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to remove movie with id=" + id
        });
      });
  };


//DELETE all movies from database
//delete all movies 

  MovieController.deleteAll = (req, res) => {
    movies.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} movies have been deleted successfully.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unable to remove all movies. An error occurred during the process."
        });
      });
  };

module.exports = MovieController;