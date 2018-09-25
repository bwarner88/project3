const db = require('../models');

module.exports = {

    // CREATE
    createUserReview:  (req, res) => {
        console.log(req.body);
        db.UserReview.create(
            req.body
        )
            .then((dbUserReview) => {
                res.json(dbUserReview);
            });
    },

    // READ
    findOneUserReview: (req, res) => {
        db.UserReview.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((dbUserReview) => {
                res.json(dbUserReview);
            });
    },
    
    // FIND ALL
    findAllUserReview:  (req, res) => {
        db.UserReview.findAll({})
            .then((dbUserReview) => {
                res.json(dbUserReview);
            });
    },

    // UPDATE
    updateUserReview:  (req, res) => {
        db.UserReview.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then((dbUserReview) => {
                res.json(dbUserReview);
            });
    },

    // DELETE
    deleteUserReview: (req, res) => {
        db.UserReview.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((dbUserReview) => {
                res.json(dbUserReview)
            });
    }

}; // END EXPORT