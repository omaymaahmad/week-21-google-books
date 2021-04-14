const router = require("express").Router();
const allRoutes = require("./API/index");
const path = require("path");

// API Routes
router.use("/api", allRoutes);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;