const router = require("express").Router();
const BooksController = require("../../controllers/BooksControllers");

// Matches with "/api/books"
router
  .route("/")
  .get(BooksController.findAll)
  .post(BooksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(BooksController.findById)
  .put(BooksController.update)
  .delete(BooksController.remove);

module.exports = router;