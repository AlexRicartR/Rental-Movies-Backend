
/// Double check if there is a typo between lines 47 and 57

const models = require('../models/index');

const filmController = {};

filmController.getFilm1 = async (req, res) => {
    try {
        let resp = await models.items.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'itemIdItem' ]
            },
            where: { type: 'Film' },
            order: [
                ["score", 'DESC']
            ],
        }) 
        res.send(resp);
    } catch (err) {
        res.send(err) 
    }

};

filmController.getFilm2 = async (req, res) => {
    try {
        let id = req.params.id 
        let resp = await models.films.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'itemIdItem']
            },
            where: { id_film: id },
            include: {
                model: models.items,
                attributes: ['name', 'description']
            }

        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};

filmController.getFilm3 = async (req, res) => {
    try {
        let name = req.params.name;
        let resp = await models.items.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'itemIdItem']
            },
            where: {
                name: name,
                type: 'Film'
            }

        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};

filmController.getFilm4 = async (req, res) => {
    try {
        let genreM = req.params.genreM;
        let resp = await models.films.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'itemIdItem']
            },
            where: { genre: genreM },
            include: {
                model: models.items,
                attributes: ['name', 'score', 'description', 'data_premiere']
            }

        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};

module.exports = filmController