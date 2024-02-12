const mongoose = require("mongoose");

const foodCatSchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
});

const FoodCat = mongoose.model("FoodCat", foodCatSchema, "foodCategory");
module.exports = FoodCat;
