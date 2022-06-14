const express = require("express");
const router = express.Router();

// GET all collections
router.get("/", (req, res) => {
  res.send("GETALL response");
});
// GET doc by id
router.get("/:id", (req, res) => {
  res.send(`Get doc by id: ${req.params.id}`);
});
// POST document
router.post("/", (req, res) => {
  res.send("POST document");
});
// UPDATE document by id
router.patch("/:id", (req, res) => {
  res.send(`UPDATE by id: ${req.params.id}`);
});
// DELETE document by id
router.delete("/:id", (req, res) => {
  res.send(`DELETE by id: ${req.params.id}`);
});

module.exports = router;