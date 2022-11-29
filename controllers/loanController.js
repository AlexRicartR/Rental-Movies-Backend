const Loan = require('../models/loans');
const loanController = {};

loanController.getAllLoans = async (req, res) => {
    try {
        const resp = await Loan.findAll()
        res.send(resp)
    } catch (error) {
        res.send(error);
    }
};
loanController.getUserLoans = async (req, res) => {
    try {
        const resp = await Loan.findAll({
            where: {
                user_id: req.params.user_id
            }
        })
        res.send(resp)
    } catch (error) {
        res.send(error);
    }
}
loanController.createLoan = async (req, res) => {
    try {
        let data = req.body;
        let resp = await Loan.create({

            user_id: data.user_id,
            loan_date: data.loan_date,
            return_date: data.return_date,
            serie_id: data.serie_id,
            film_id: data.film_id
        })
        res.send(resp)
    }
    catch (error) {
        res.send(error);
    }
};
loanController.updateLoan = async (req, res) => {
    try {
        let data = req.body;
        let resp = await Loan.update(data, {
            where: { id_item: req.params.id_item }
        });

        res.send({
            resp: resp,
            message: 'Loan updated correctly'
        })

    } catch (error) {
        res.send(error);
    }
};
loanController.deleteLoan = async (req, res) => {

    try {
        let data = req.params;
        let resp = await Loan.destroy({
            where: { id_item: data.id_item }
        })
        if (resp == 1) {
            res.send('Loan has been deleted');
        } else {
            res.send("Loan hasn't been deleted");
        }
    } catch (error) {
        res.send(error);
    }

};


module.exports = loanController;