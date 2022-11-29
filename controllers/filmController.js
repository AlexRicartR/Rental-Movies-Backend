const Film = require('../models/films');
const FilmController = {};

FilmController.getFilms = async (req, res) => {
    Film.findAll()
        .then(resp => {
            res.send(resp);
        });
};
FilmController.getFilmById = async (req, res) => {
    try {
        let id_film = req.params.id;
        Film.findByPk(id_film)
            .then(resp => {
                res.send(resp);
            });
    } catch (error) {
        res.send(error);
    }
}
FilmController.getFilmByTitle = async (req, res) => {

    try {
        let title = req.params.title;
        let resp = await Film.findAll({
            where: { title: title }
        })
        res.send(resp);
    } catch (error) {
        res.send(error);
    }

}
FilmController.getFilmsByGenre = async (req, res) => {

    try {
        let genre = req.params.genre;
        let resp = await Film.findAll({
            where: { genre: genre }
        })
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
};
FilmController.getTopRatedFilms = async (req, res) => {
    try {
        let resp = await Film.findAll({
            include: {
                model: Film,
                where: {
                    rating: [8 - 10]
                }
            }
        });
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
}
FilmController.registerFilm = async (req, res) => {
    try {
        let data = req.body;
        let resp = await Film.create({
            title: data.title,
            genre: data.genre,
            rating: data.rating,
            release_date: data.release_date
        })
        res.send(resp)
    }
    catch (error) {
        res.send(error);
    }
};
FilmController.updateFilm = async (req, res) => {

    try {
        let data = req.body;
        let resp = await Film.update({

            title: data.title,
            genre: data.genre,
            rating: data.rating,
            release_date: data.release_date

        }, {
            where: { id_film: req.params.id_film }
        });
        res.send({
            message: 'Film updated correctly'
        })
    } catch (error) {
        res.send(error);
    }
};
FilmController.deleteFilm = async (req, res) => {
    try {
        let data = req.params;
        let resp = await Film.destroy({
            where: { id_film: data.id_film }
        })
        if (resp == 1) {
            res.send('Film has been deleted');
        } else {
            res.send("Unable to delete film");
        }
    } catch (error) {
        res.send(error);
    }
};

module.exports = FilmController;