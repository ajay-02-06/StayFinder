const express = require("express");

const router = express.Router();

const {
  addPG,
  getAllPGs,
  getSinglePG,
  updatePG,
  deletePG,
} = require("../controllers/pgControllers");

router.post("/add", addPG);

router.get("/", getAllPGs);
router.get("/:id", getSinglePG);
router.put("/:id", updatePG);
router.delete("/:id", deletePG);

module.exports = router;