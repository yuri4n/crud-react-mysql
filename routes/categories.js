const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/api/categories", (req, res) => {
  mysqlConnection.query("SELECT * FROM categories", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log();
    }
  });
});

router.get("/api/categories/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM categories WHERE id = ?",
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

router.delete("/api/categories/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM categories WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Category Deleted" });
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/api/categories", (req, res) => {
  const { id, name } = req.body;
  const query = 'CALL categoryAddOrEdit(?, ?);';
  mysqlConnection.query(query, [id, name], (err, rows, fields) => {
    if (!err) {
      res.json({ status: "Category Saved" });
    } else {
      console.log(err);
    }
  });
});

router.put("/api/categories/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const query = 'CALL categoryAddOrEdit(?, ?);';
  mysqlConnection.query(query, [id, name], (err, rows, fields) => {
    if (!err) {
      res.json({ status: "Category Updated" });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
