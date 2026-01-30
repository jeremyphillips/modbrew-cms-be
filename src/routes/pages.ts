import express from "express";
import Page from "../models/componentSchemas.js";
import createCRUDController from "../controllers/crudController.js";

const router = express.Router();
const pageController = createCRUDController(Page);

router.get("/", pageController.getAll);
router.get("/:id", pageController.getById);
router.post("/", pageController.create);
router.put("/:id", pageController.update);
router.delete("/:id", pageController.remove);

export default router;
