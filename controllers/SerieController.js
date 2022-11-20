const models = require('../models/index');

const serieController = {};


serieController.getSerie1 = async (req, res) => {
    try {
        let resp = await models.items.findAll({
            where: { type: 'Serie' },
            order: [
                ["score", 'DESC']
            ]
        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};

serieController.getSerie2 = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await models.series.findAll(
            {
                where: { id_serie: id },
                include: {
                    model: models.items,
                    attributes: ['name', 'description']
                }
            }
        )
        res.send(resp)
    } catch (err) {
        res.send(err)
    }

};

serieController.getSerie3 = async (req, res) => {
    try {
        let name = req.params.name;
        let resp = await models.items.findAll(
            {
                where: {
                    name: name,
                    type: 'Serie'
                }
            }
        )
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};
const sequelize = require('../db/db')
const { Sequelize } = require('sequelize')

/* Functional requirement: 
Get series that will have an episode broadcasted in the following 7 days. */

let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 7}`  
const { Op } = require("sequelize");

serieController.getSerie4 = async (req, res) => {
    let resp = await sequelize.query("SELECT * FROM railway.series where next_episode BETWEEN (CURDATE()) and (CURDATE() + INTERVAL 7 DAY)");
    res.send(resp);
};

serieController.getSerie5 = async (req, res) => {
    try {
        let resp = await models.series.findAll(
            {
                where: { permit: true },
                include: {
                    model: models.items,
                    attributes: ['name', 'description']
                }
            }
        )
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};

module.exports = serieController;