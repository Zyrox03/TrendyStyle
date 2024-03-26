// storeModel.js
const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  storeAdmin: {
    type: String,
  },
  stars: {
    type: Number,
    default: 0,
  },
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
