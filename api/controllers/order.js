const Order = require("../models/order"); //importing the order model
const Product = require("../models/product");
const mongoose = require("mongoose");

//Handle GET req to all orders.
exports.orders_get_all = async (req, res, next) => {
  const docs = await Order.find()
    .select("name progress comment")
    .populate("product", "name")
    .exec();
  try {
    res.status(200).json({
      count: docs.length,
      products: docs.map(doc => {
        return {
          order_id: doc._id,
          product_id: doc.product,
          progress: doc.progress,
          comment: doc.comment,
          request: {
            type: "GET",
            url: req.get("host") + "/api/orders/" + doc._id
          }
        };
      })
    });
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
};

//handle POST req to create an order to /orders
//To create an order: json raw {"productId": "__", "quantity": "__"}
exports.orders_create_order = async (req, res, next) => {
  try {
    const product = await Product.findById(req.body.productId);

    if (!product) {
      return res.status(500).json({
        message: "Product not found"
      });
    }
    const result = await new Order({
      _id: mongoose.Types.ObjectId(),
      product: req.body.productId,
      progress: req.body.progress,
      comment: req.body.comment
    }).save();

    res.status(201).json({
      message: "Order successfully created",
      createdOrder: {
        product_id: result.product,
        progress: result.progress,
        comment: result.comment
      },
      request: {
        type: "GET",
        url: req.get("host") + "/api/orders/" + result._id
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  }
};

//handle GET req by ID to /orders
exports.orders_get_order = async (req, res, next) => {
  const doc = await Order.findById(req.params.orderId)
    .select("name progress comment")
    .populate("product", "name")
    .exec();
  try {
    // console.log(doc);
    if (doc) {
      res.status(200).json({
        request: {
          order_id: doc._id,
          product_id: doc.product,
          progress: doc.progress,
          comment: doc.comment,

          type: "GET",
          order_list: req.get("host") + "/api/orders/"
        }
      });
    } else {
      res.status(404).json({
        message: "Order not found"
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
};

exports.orders_update_order = async (req, res, next) => {
  try {
    const id = req.params.orderId;
    const updateOps = {};

    for (const ops of req.body) {
      console.log((updateOps[ops.propName] = ops.propName));
      if (
        (updateOps[ops.propName] = ops.value) &&
        (updateOps[ops.propName1] = ops.value1)
      ) {
        const result = await Order.updateOne({ _id: id }, { $set: updateOps })
          .select("progress comment")
          .exec();
        if (result.ok) {
          console.log(result);

          res.status(200).json({
            message: "Order updated",
            request: {
              order: result,
              type: "GET",
              updated_order: req.get("host") + "/api/orders/" + id
            }
          });
        } else {
          throw new TypeError("error");
        }
      } else {
        throw new TypeError("error");
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
      message: `check syntax: [{${"'propName'"}: ${"'progress'"} or ${"'comment'"}, ${"'value'"} : ${"'new value'"}]}`
    });
  }
};

//handle DELETE req to /orders
exports.orders_delete_order = async (req, res, next) => {
  const result = await Order.deleteOne({ _id: req.params.orderId }).exec();

  try {
    // console.log(result);
    res.status(200).json({
      message: "Order deleted",
      request: {
        type: "POST",
        url: req.get("host") + "/api/orders/",
        body: {
          productId: "ID",
          quantity: Number
        }
      }
    });
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
};
