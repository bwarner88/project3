const db = require('../../models');

module.exports = {

    // CREATE
    createRequest:  (req, res) => {
        console.log(req.body);
        db.Request.create(
            req.body
        )
            .then((dbRequest) => {
                res.json(dbRequest);
            });
    },

    // READ
    findOneRequest: (req, res) => {
        db.Request.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((dbRequest) => {
                res.json(dbRequest);
            });
    },
    
    // FIND ALL
    findAllRequest:  (req, res) => {
        db.Request.findAll({})
            .then((dbRequest) => {
                res.json(dbRequest);
            });
    },

    // UPDATE
    updateRequest:  (req, res) => {
        db.Request.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then((dbRequest) => {
                res.json(dbRequest);
            });
    },

    // DELETE
    deleteRequest: (req, res) => {
        db.Request.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((dbRequest) => {
                res.json(dbRequest)
            });
    }

}; // END EXPORT