const express = require("express");
const router = express.Router();

router.get("/",(req, res) => {
  res.send("¡Bienvenido a Node.js Express con MySQL!");
} );

module.exports = router;
