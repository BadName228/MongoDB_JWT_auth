const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./router/authRouter");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Root:Root123@cluster0.xjj6htp.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`Server started, port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
