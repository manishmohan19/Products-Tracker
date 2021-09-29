const express = require("express");
const router = express.Router();
const controller = require("./productController");

router.get("/", controller.getProducts);

router.get("/:id", controller.getSingleProduct);

router.post("/add", controller.addProduct);

router.put("/:id", controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

module.exports = router;
