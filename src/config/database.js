const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shaival123:shaival123@learnnodecluster.0lhy5.mongodb.net/?retryWrites=true&w=majority&appName=LearnNodeCluster/devApp"
  );
};

module.exports = { connectDB };
