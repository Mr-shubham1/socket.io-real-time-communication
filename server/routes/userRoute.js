import express from "express";
import { getotherusers, login, logout, register } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const userRouter = express.Router();

userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.get("/logout",logout);
userRouter.get("/",isAuthenticated,getotherusers);


export default userRouter;