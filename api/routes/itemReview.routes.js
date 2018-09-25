const express = require("express");
const router = express.Router();
// CONTROLLER
const ctrl = require('../controllers/itemReview.controller')

/**CREATE new itemReviewReview to itemReview table */
router.post("/", ctrl.createItemReview);
/**GET ONE itemReview from itemReview table */
router.get("/:id", ctrl.findOneItemReview);
/**GET ALL itemReview data from itemReview table */
router.get("/", ctrl.findAllItemReview);
/**UPDATE itemReview WHERE itemReview is email FROM itemReview table */
router.put("/:id", ctrl.updateItemReview);
/**DELETE itemReview WHERE email is itemReview FROM itemReview table */
router.delete("/:id", ctrl.deleteItemReview);

module.exports = router;