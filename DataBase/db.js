import mongoose from "mongoose";

const connectBD = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todos");
    console.log("Connexion à la BD succès !");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectBD;
