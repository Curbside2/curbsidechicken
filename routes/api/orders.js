const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/users"
router.route("/")
  .post(controller.create);

// Matches with "/api/orders/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)

module.exports = router;