import express from "express";
const todoliste = require("../controller/controllerTodo");
const router = express.Router();

router.get("/", todoliste.getAll);
router.get("/:id", todoliste.getOne);
router.post("/post", todoliste.create);
router.put("/status/:id/:status", todoliste.updateStatus);
router.put("/:id", todoliste.update);
router.delete("/:id", todoliste.delete);

module.exports = router;
