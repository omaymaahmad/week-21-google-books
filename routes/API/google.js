const router = require("express").Router();
const GoogleController = require("../../controllers/GoogleController");

router.route("/").get(GoogleController.getGoogleBooks);

module.exports = router;
