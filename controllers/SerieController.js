const Serie = require('../models/series');
const { Op } = require("sequelize");
const SerieController = {};

SerieController.getSeries = async (req, res) => {
    Serie.findAll()
        .then(resp => {
            res.send(resp);
        });
};

SerieController.getSerieById = async (req, res) => {
    try {
        let id_serie = req.params.id_serie
        Serie.findByPk(id_serie)
            .then(resp => {
                res.send(resp)
            })
    } catch (error) {
        res.send(error)
    }
}

SerieController.getSerieByTitle = async (req, res) => {
    try {
        let title = req.params.title;
        let resp = await Serie.findAll({
            where: { title: title }
        });
        res.send(resp);

    } catch (error) {
        res.send(error);
    }
}

SerieController.getUpcomingSeries = async (req, res) => {
    const currentDate = new Date();
    const nextWeek = new Date();

    nextWeek.setDate(nextWeek.getDate() + 7)
    try {
        let resp = await Serie.findAll({
            where: {
                release_date: {
                    [Op.lte]: nextWeek,
                    [Op.gte]: currentDate
                }
            }
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

SerieController.getTheaterSeries = async (req, res) => {

    try {
        let resp = await Serie.findAll({
            where: { in_theater: true }
        })
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
}

SerieController.getTopRatedSeries = async (req, res) => {

    try {
        let resp = await Serie.findAll({
            where: { rating: [6 - 10] }
        })
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
}

SerieController.registerSerie = async (req, res) => {

    try {
        let data = req.body;
        let resp = await Serie.create({

            title: data.title,
            genre: data.genre,
            rating: data.rating,
            in_theater: data.in_theater,
            release_date: data.release_date
        })
        res.send(resp)
    }
    catch (error) {
        res.send(error);
    }
};

//Update Existing Serie

SerieController.updateSerie = async (req, res) => {

    try {
        let data = req.body;
        let resp = await Serie.update({

            title: data.title,
            genre: data.genre,
            rating: data.rating,
            in_theater: data.in_theater,
            release_date: data.release_date
        }, {
            where: { id_serie: req.params.id_serie }
        });
        res.send({
            message: 'Serie updated correctly'
        })
    } catch (error) {
        res.send(error);
    }
};

//Delete One Serie By Id

SerieController.deleteSerie = async (req, res) => {
    try {
        let data = req.params;
        let resp = await Serie.destroy({
            where: { id_serie: data.id_serie }
        })
        if (resp == 1) {
            res.send('Serie has been deleted');
        } else {
            res.send("Serie hasn't been deleted");
        }

    } catch (error) {
        res.send(error);
    }

};

module.exports = SerieController;