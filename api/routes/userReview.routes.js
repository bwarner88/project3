const express = require("express");
const router = express.Router();
// CONTROLLER
const ctrl = require('../controllers/userReview.controller')

/**CREATE new userReview to userReview table */
router.post("/", ctrl.createUserReview);
/**GET ONE userReview from userReview table */
router.get("/:id", ctrl.findOneUserReview);
/**GET ALL userReview data from userReview table */
router.get("/", ctrl.findAllUserReview);
/**UPDATE userReview WHERE userReview is email FROM userReview table */
router.put("/:id", ctrl.updateUserReview);
/**DELETE userReview WHERE email is UserReview FROM userReview table */
router.delete("/:id", ctrl.deleteUserReview);

module.exports = router;