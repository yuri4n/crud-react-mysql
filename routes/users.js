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

router.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM users WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "User Deleted" });
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/api/users", (req, res) => {
  const { id, category_id, name, balance } = req.body;
  const query = 'CALL userAddOrEdit(?, ?, ?, ?);';
  mysqlConnection.query(query, [id, category_id, name, balance], (err, rows, fields) => {
    if (!err) {
      res.json({ status: "User Saved" });
    } else {
      console.log(err);
    }
  });
});

router.put("/api/users/:id", (req, res) => {
  const { category_id, name, balance } = req.body;
  const { id } = req.params;
  const query = 'CALL userAddOrEdit(?, ?, ?, ?);';
  mysqlConnection.query(query, [id, category_id, name, balance], (err, rows, fields) => {
    if (!err) {
      res.json({ status: "User Updated" });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
