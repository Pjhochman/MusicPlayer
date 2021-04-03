const express = require("express");
const route = new express.Router();
const morgan = require("morgan");

const orderRoutes = require("./routes/orders");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/products");

route.use(morgan("dev"));
route.use("/uploads", express.static("uploads")); //needs to be a static folder (accessible to all) // no leading slash for uploads/ in routes/products.js means relative path
route.use(express.urlencoded({ extended: false })); //false to only support simple bodies for url encoded data
route.use(express.json()); //extracts json data and makes it easily readable

//Routes which should handle requests
route.use("/products", productRoutes);
route.use("/orders", orderRoutes);
route.use("/user", userRoutes);

module.exports = route;
