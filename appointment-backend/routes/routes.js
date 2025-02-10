const express = require("express");
const router = express.Router();

// ✅ Example Route: Get all appointments
router.get("/appointments", (req, res) => {
  res.json([{ id: 1, name: "John Doe", date: "2025-02-10" }]);
});

// ✅ Test Route
router.get("/test", (req, res) => {
  res.send("Test route is working!");
});

module.exports = router;
