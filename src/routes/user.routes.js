import { Router } from "express";
import { registerUser } from "../controllers/user.controler.js";

const router = Router();

router.route("/register").post(registerUser)
// Router.route("/login").post(ligin)

export default router