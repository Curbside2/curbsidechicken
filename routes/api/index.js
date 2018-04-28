const router = require("express").Router();
const orderRoutes = require("./orders");

// order routes
router.use("/orders", orderRoutes);

module.exports = router;