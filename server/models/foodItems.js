const mongoose = require("mongoose");

const foodItemsSchema = new mongoose.Schema({
  CategoryName: String,

  name: String,

  img: String,

  options: Array,

  description: String,
});

const Food = mongoose.model("Food", foodItemsSchema,"foodData2");
module.exports = Food;
