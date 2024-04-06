const mongoose = require("mongoose");

// Define the schema for your model

const cartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  color: String,
  quantity: Number,
  size: String
});


const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    wilaya: {
      type: String,
      required: true,
    },
    baladiya: {
      type: String,
    },
    deliveryOption: {
      livraisonType: {
        type: String,
        required: true,
      },
      livraisonPrice: {
        type: Number,
        required: true,
      },
    },

    notes: {
      type: String,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    quantity: {
      type: Number,
    },

    productInfo: {
      name: String,
      price: Number,
      slug : String
    },
    cartItems: {
      type: [cartItemSchema],
      default: null
  },
    orderTotal: {
      type: Number, 
      required: true,
    }

  },
  {
    timestamps: true, 
  }
);

// Create the Mongoose model using the schema
const Order = mongoose.model("Order", orderSchema);

// Export the model for use in other parts of your application
module.exports = Order;
