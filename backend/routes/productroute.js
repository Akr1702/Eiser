const express = require("express");
const getproductcontroller = require("../controllers/products/getproductcontroller");
const router = express.Router();

router.get("/", getproductcontroller);
router.get("/_id/:_id", getproductcontroller);
router.get("/name/:name", getproductcontroller);
router.get("/category/:category", getproductcontroller);
router.get("/sub_category/:sub_category", getproductcontroller);
router.get("/rating/:rating", getproductcontroller);

router.get("/random", getproductcontroller);
router.get("/top-rated", getproductcontroller);
router.get("/lowtohigh", getproductcontroller);
router.get("/hightolow", getproductcontroller);


module.exports = router;