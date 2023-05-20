const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //res.send('<form action="/admin/product" method="POST"><input type="text" name="title" placeholder="title"><input type="text" name="size" placeholder="size"><button type="submit">Add Product</button></form>');
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = router;
