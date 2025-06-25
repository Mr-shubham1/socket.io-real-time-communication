import express from "express"
import { getmessage, sendmessage } from "../controllers/messageController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const messageRouter = express.Router();

messageRouter.post("/send/:id",isAuthenticated, sendmessage);
messageRouter.get("/:id",isAuthenticated, getmessage)

export default messageRouter;
