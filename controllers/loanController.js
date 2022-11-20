const models = require('../models/index');

const loanController = {};

loanController.newLoan = async (req, res) => {
    let id = req.params
    try {
        const { email } = req.body
        const locateUser = await models.users.findAll({ where: { email: email } })
        let dataUser = locateUser.map(user => user.contentData)
        let userObject = dataUser.map(id => id.user_id)
        let loan = await models.loans.create(
            {
                user_id: userObject[0]
            }
        )
        if (Number(id.id) === userObject[0]) {
            let loanId = loan.contentData.loan_id;
            const recentLoan = await models.loans.findAll({ where: { loan_id: loanId } })
            let loanMap = recentLoan.map(loan => loan.contentData)
            let idLoan = loanMap.map(id => id.loan_id)
            let item = req.body;
            let itemsArray = item.itemIdItem;
            let loanItems = [];
            for (itm of itemsArray) {
                let itemLoan = await models.loans_items.create({
                    itemIdItem: itm,
                    loan_id: idLoan[0]
                })
                loanItems.push(itemLoan);
            }
            res.send({
                Loan: recentLoan,
                loanItems: loanItems
            })
        } else {
            res.send({ message: 'Hey buddy! It seems that you are trying to loan an id that is not matching your account.' })
        }
    } catch (error) {
        res.send(error)
    }
};

loanController.loansUser = async (req, res) => {
    let idUser = req.params;
    try {
        const { email } = req.body
        const locateUser = await models.users.findAll({ where: { email: email } })
        let dataUser = locateUser.map(user => user.contentData)
        let userObject = dataUser.map(id => id.user_id)
        let loan = await models.loans.create(   ///// Check this line 
            {
                user_id: userObject[0]
            }
        )
        if (Number(idUser.idUser) === userObject[0]) {
            let loans = await models.loans.findAll({
                attributes: {
                    exclude: ['loanIdLoan', 'itemIdItem', 'loanItemIdLoanItem']
                },
                where: { user_id: idUser.idUser }
            })
            let activeLoans = loans.map(rent => rent.contentData)
            let loanIdentifiers = activeLoans.map(id => id.loan_id)
            let itLoan = await models.loans_items.findAll(
                {
                    where: { loan_id: loanIdentifiers },
                    include: {
                        model: models.items,
                        attributes: ['item_id', 'name']
                    }
                }
            )
            res.send(itLoan);
        } else {
            res.send({ message: 'Hey mate! Please note that the order that you are requesting does not match your email' })
        }

    } catch (error) {
        res.send(error)
    }
};

loanController.loanUpdate = async (req, res) => {
    let idUser = req.params;
    let loanId = req.params
    try {
        let fullLoanList = await models.loans.findAll({
            where: {
                user_id: idUser.idUser,
                loan_id: loanId.loanId
            }
        })
        let rent = fullLoanList.map(rent => rent.contentData)
        let idLoan = rent.map(id => id.loan_id)
        let updateLoan = await models.loans_items.findOne(
            {
                where: { loan_id: idLoan },
                include: {
                    model: models.items,
                    attributes: ['item_id', 'name']
                }
            }
        )
        let body = req.body
        await updateLoan.update(
            {
                itemIdItem: body.item_id,
                item: {
                    item_id: body.item_id,
                    name: body.name
                }
            }
        )
        res.send({
            Loan: updateLoan,
            message: "Successfully updated"
        })
    } catch (error) {
        res.send(error)
    }

};

loanController.fullLoanList = async (req, res) => {
    try {
        let fullLoanList = await models.loans.findAll();
        let activeLoans = fullLoanList.map(rent => rent.contentData)
        let loanIdentifiers = activeLoans.map(id => id.loan_id)
        let aggregateLoans = await models.loans_items.findAll(
            {
                where: { loan_id: loanIdentifiers },
                include: {
                    model: models.items,
                    attributes: ['item_id', 'name']
                }
            }
        )
        res.send(aggregateLoans)
    } catch (error) {
        res.send(error)
    }

}

module.exports = loanController