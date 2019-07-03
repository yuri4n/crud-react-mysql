const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/api/users", (req, res) => {
  mysqlConnection.query("SELECT * FROM users", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log();
    }
  });
});

router.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM users WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log();
      }
    }
  );
});

module.exports = router;
