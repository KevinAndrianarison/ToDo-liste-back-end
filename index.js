import cors from "cors";
import express from "express";
import connectBD from "./Database/db";
import router from "./routes/routes";

const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
connectBD();
app.use("/api/todo", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
