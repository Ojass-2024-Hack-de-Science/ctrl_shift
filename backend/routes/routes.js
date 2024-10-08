import { userLogin, userRegister } from "../controller/user.Controller.js";
import express from "express";

const router = express.Router();

router.post("user/register", userRegister);
router.post("user/login", userLogin);


export default router;