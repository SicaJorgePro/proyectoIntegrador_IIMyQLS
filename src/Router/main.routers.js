const express = require("express");
const router = express.Router();

router.get("/",(req, res) => {
  res.send("Bien benido a Node js Express con MyQls");
} );

module.exports = router;
