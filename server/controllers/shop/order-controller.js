const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      totalAmount,
      orderDate,
      orderUpdateDate,
      cartId,
    } = req.body;

    // Create a new order with COD method
    const newOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus: "pending", // Status set to pending for COD
      paymentMethod: "cash_on_delivery",
      paymentStatus: "unpaid",
      totalAmount,
      orderDate,
      orderUpdateDate,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully with Cash on Delivery.",
      orderId: newOrder._id,
    });
  } catch (e) {
   // console.log(e);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the order.",
    });
  }
};

const confirmOrderDelivery = async (req, res) => {
  try {
    const { orderId } = req.body;

    let order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    order.paymentStatus = "paid"; // Mark as paid after COD is completed
    order.orderStatus = "delivered"; // Update order status to delivered

    for (let item of order.cartItems) {
      let product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product ${item.productId} not found.`,
        });
      }

      product.totalStock -= item.quantity;
      await product.save();
    }

    const cartId = order.cartId;
    await Cart.findByIdAndDelete(cartId); // Remove cart after order is confirmed

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order confirmed and delivered.",
      data: order,
    });
  } catch (e) {
   // console.log(e);
    res.status(500).json({
      success: false,
      message: "An error occurred while confirming the order delivery.",
    });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    //console.log(e);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching orders.",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    //console.log(e);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the order details.",
    });
  }
};

module.exports = {
  createOrder,
  confirmOrderDelivery,
  getAllOrdersByUser,
  getOrderDetails,
};
