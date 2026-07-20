const express = require("express");

const router = express.Router();

const {
  submitRequest,
  getAllRequests,
  approveRequest,
  rejectRequest,
} = require("../controllers/requestPGController");

router.post("/", submitRequest);

router.get("/", getAllRequests);

router.post("/approve/:id", approveRequest);

router.delete("/reject/:id", rejectRequest);

module.exports = router;