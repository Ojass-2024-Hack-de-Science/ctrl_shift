import { userLogin, userRegister } from "../controller/user.Controller.js";
import { driverLogin, driverRegister } from "../controller/valet.Controller.js";
import express from "express";

const router = express.Router();

router.post("/user/register", userRegister);
router.post("/user/login", userLogin);
router.post("/valet/register", driverRegister);
router.post("/valet/login", driverLogin);
router.post("/")


export default router;