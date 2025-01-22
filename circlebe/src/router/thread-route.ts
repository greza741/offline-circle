import { Router } from "express";
import * as threadController from "../controllers/thread-controller";
import { authentication } from "../middlewares/authentication";
import upload from "../middlewares/uploadFile";
const threadRouter = Router();

threadRouter.post(
  "/create",
  authentication,
  upload.array("images", 4),
  threadController.createThread
);
threadRouter.get("/", authentication, threadController.getThreads);
threadRouter.get("/detail/:id", authentication, threadController.detailThread);
threadRouter.get("/feed", authentication, threadController.feed);
threadRouter.post(`/reply`, authentication, threadController.createReply);
threadRouter.get(`/replies/:id`, authentication, threadController.getReplies);
threadRouter.get("/check/:id", authentication, threadController.replyCount);

export default threadRouter;
