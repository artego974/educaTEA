import { Router } from "express";
import { UserController } from "../controllers/UserController";


const router = Router();
const userController = new UserController();

router.get("/user/:id", userController.show);
router.get("/user", userController.list);
router.post("/user", userController.create);

export default router;