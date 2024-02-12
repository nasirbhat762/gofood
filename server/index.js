const express = require("express");
const app = express();
const mongoose = require("mongoose");
// importing json web token
const jwt = require("jsonwebtoken");
//setting secret key for jwt token
const jwtSecret = "errorcodexdecember2023ltsuroparpunjab";
// importing bcrypt for hashing passwords
const bcrypt = require("bcrypt");
// importing CORS MIDDLEWARE
const cors = require("cors");

// importing models
const Food = require("./models/foodItems.js");
const User = require("./models/user.js");
const FoodCat = require("./models/foodcategory.js");

// for validation
const { body, validationResult } = require("express-validator");
// middlewares
// decoding url body
app.use(express.urlencoded({ extended: true }));
// accessing json in body
app.use(express.json());

// Allow requests from 'http://localhost:5173'
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

// app.use("/login", (req, res, next) => {
//   if (localStorage.getItem("authToken") != null) {
//     res.json({ response: "you are already logged in" });
//   } else {
//     return next();
//   }
// });

// connecting to database
async function main() {
  await mongoose.connect(
    "mongodb+srv://nasirbhat762:Xu3oR0paCC0jYXrw@cluster0.eppkkjs.mongodb.net/gofood?retryWrites=true&w=majority"
  );
}
main()
  .then(async () => {
    console.log("database connected successfully");
  })
  .catch((err) => console.log(err));

// ROUTES

// root route
app.get("/", (req, res) => {
  res.send("this is root");
});

// create user route
app.post(
  "/createuser",
  [
    body("name", "invalid name").isLength({ min: 4 }),
    body("email", "invalid email").isEmail(),
    body("password", "inavlid password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // AGAR ERRORS KHALI NAHI HAI
      return res.status(400).json({ errors: errors.array() });
    }
    const saltRounds = 10;
    const securePassword = await bcrypt.hash(req.body.password, saltRounds);

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securePassword,
    }).then(res.json({ success: true }));
  }
);

// login user route
app.post(
  "/login",
  [
    body("email", "enter correct email").isEmail(),
    body("password", "enter valid password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // AGAR ERRORS KHALI NAHI HAI
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    let password = req.body.password;

    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ errors: "user not found" });
    }
    // compare password entered by the user with the hash of the same user in database
    let pwdCompare = await bcrypt.compare(password, user.password);

    if (!pwdCompare) {
      return res.status(400).json({ errors: "invalid password" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = await jwt.sign(data, jwtSecret);
    return res.json({ success: true, authToken: authToken });
  }
);

// display food items route
app.get("/displayFood", async (req, res) => {
  let items = await Food.find({});
  let cat = await FoodCat.find();

  res.json([items, cat]);
});

// starting the server
app.listen(8080, () => {
  console.log("app is listening on port 8000");
});

