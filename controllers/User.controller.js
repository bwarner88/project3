const db = require("../models");
const express = require("express");
const router = express.Router();


/**CRUD ROUTES FOR USER TABLE */

/**GET ALL user data from User table */
router.get("/api/user/", (req, res) => {
    db.User.findAll({})
        .then((dbUser) => {
            res.json(dbUser);
        });
});

/**GET ONE user from User table */
router.get("/api/user/:email", (req, res) => {
    db.User.findOne({
        where: {
            email: req.params.email
        }
    })
        .then((dbUser) => {
            res.json(dbUser);
        });
});

/**GET ALL item for a specific User FROM User table*/
router.get("/api/user/item/:email", (req, res) => {
    db.Item.findAll({
        where: {
            email: req.params.email
        }
    }).then((dbUser) => {
        res.json(dbUser);
    });
});

/**CREATE new user to User table */
router.post("/api/user", (req, res) => {
    console.log(req.body);
    db.User.create({
        name: req.body.name,
        location: req.body.location,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    })
        .then((dbUser) => {
            res.json(dbUser);
        });
});

router.post("/api/user", function (req, res) {
    console.log(req.body)
});


/**DELETE user WHERE email is user FROM User table */
router.delete("api/user/:email", (req, res) => {
    db.User.destroy({
        where: {
            email: req.params.email
        }
    })
        .then((dbUser) => {
            res.json(dbUser)
        });
});


/**UPDATE user WHERE user is email FROM User table */
router.put("/api/user", (req, res) => {
    db.User.update(req.body,
        {
            where: {
                email: req.body.email
            }
        })
        .then((dbUser) => {
            res.json(dbUser);
        });
});

module.exports = router;