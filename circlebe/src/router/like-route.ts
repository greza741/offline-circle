import { Router } from "express";
import * as likeController from "../controllers/like-controller";
import { authentication } from "../middlewares/authentication";
const likeRouter = Router();

likeRouter.post("/", authentication, likeController.createLike);
likeRouter.get("/check", authentication, likeController.checkLike);

export default likeRouter;
