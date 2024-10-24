const express = require("express");
const { userAuth } = require("./middlewares/auth");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, age, gender } = req.body;
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    age: age,
    gender: gender,
  });
  await user.save();

  res.send("USer added");
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.email;

  try {
    const user = await User.find({ email: userEmail });

    if (user.length === 0) {
      res.send("User dont exist");
    }
    console.log("User", user);
    res.send(user);
  } catch (error) {
    res.status(404).send("User not found");
  }
});

app.get("/getAllUser", async (req, res) => {
  try {
    const users = await User.find({}, "firstName lastName");
    res.send(users);
    console.log("Al users", users);
  } catch (error) {
    res.status(400).send("Error while fetcing the data");
  }
});

app.get("/findOne", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }, "firstName");
    res.send(user);
    console.log("User", user);
  } catch (error) {
    res.status(400).send("User not found");
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(8000, () => {
      console.log("started");
    });
  })
  .catch((err) => {
    console.log("Error while connecting the database");
  });
