const db = require('../models');

module.exports = {

    // CREATE
    createItemReview:  (req, res) => {
        console.log(req.body);
        db.ItemReview.create(
            req.body
        )
            .then((dbItemReview) => {
                res.json(dbItemReview);
            });
    },

    // READ
    findOneItemReview: (req, res) => {
        db.ItemReview.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((dbItemReview) => {
                res.json(dbItemReview);
            });
    },
    
    // FIND ALL
    findAllItemReview:  (req, res) => {
        db.ItemReview.findAll({})
            .then((dbItemReview) => {
                res.json(dbItemReview);
            });
    },

    // UPDATE
    updateItemReview:  (req, res) => {
        db.ItemReview.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then((dbItemReview) => {
                res.json(dbItemReview);
            });
    },

    // DELETE
    deleteItemReview: (req, res) => {
        db.ItemReview.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((dbItemReview) => {
                res.json(dbItemReview)
            });
    }

}; // END EXPORT