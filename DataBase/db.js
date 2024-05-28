// import mongoose from "mongoose";

// const connectBD = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/todos");
//     console.log("Connexion à la BD succès !");
//   } catch (error) {
//     console.log(error);
//   }
// };
import mongoose from "mongoose";

const uri =
  "mongodb+srv://kevinandrianarison25:uFLpJUUPUhznl3KO@todo-list.ofrdjt2.mongodb.net/todos?retryWrites=true&w=majority&appName=ToDo-list";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

async function connectBD() {
  try {
    await mongoose.connect(uri, options);
    console.log("Connexion success");
  } catch (err) {
    console.error("Error Connexion", err);
  }
}

module.exports = connectBD;
