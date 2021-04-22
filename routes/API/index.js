const router = require("express").Router();
const bookRoutes = require("./books");
const googleBooks = require("./GoogleBooks")

// Post routes
router.use("/books", bookRoutes);
router.use("/googlebooks", googleBooks);

module.exports = router;