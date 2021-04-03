const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const OrdersController = require("../controllers/order");

//Handle incoming get requests to /orders
router.get("/", checkAuth, OrdersController.orders_get_all);

//handle post requests to /orders
router.post("/", checkAuth, OrdersController.orders_create_order);

//handle get requests by id to /orders
router.get("/:orderId", checkAuth, OrdersController.orders_get_order);

//handle patch requests to /orders
router.patch("/:orderId", checkAuth, OrdersController.orders_update_order);

//handle delete requests to /orders
router.delete("/:orderId", checkAuth, OrdersController.orders_delete_order);

module.exports = router;
