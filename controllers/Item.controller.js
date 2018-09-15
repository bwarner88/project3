const db = require("../models");
const express = require("express");
const router = express.Router();


/**CRUD ROUTES FOR ITEM TABLE */

/**GET ALL item data from Item table */
router.get("/api/item/", (req, res) => {
    db.Item.findAll({})
        .then((dbUser) => {
            res.json(dbUser);
        });
});

/**GET ONE item from Item table */
router.get("/api/item/:email", (req, res) => {
    db.Item.findOne({
        where: {
            email: req.params.email
        }
    })
        .then((dbUser) => {
            res.json(dbUser);
        });
});

/**CREATE new item to Item table */
router.post("/api/item", (req, res) => {
    db.Item.create({
        email: req.body.email,
        itemName: req.body.itemName,
        description: req.body.description,
        date: req.body.date,
        isAvailable: req.body.isAvailable
    })
        .then((dbUser) => {
            res.json(dbUser);
        });
});
/**DELETE item WHERE item is email from Item table */
router.delete("api/item/:email", (req, res) => {
    db.Item.destroy({
        where: {
            email: req.params.email
        }
    })
        .then((dbUser) => {
            res.json(dbUser)
        });
});


/**UPDATE user WHERE email is item FROM Item table */
router.put("/api/item", (req, res) => {
    db.Item.update(req.body,
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
