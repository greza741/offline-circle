import { Router } from "express";
import authRouter from "./auth-route";
import threadRouter from "./thread-route";
import likeRouter from "./like-route";
import followRouter from "./follow-route";
import profileRouter from "./profile-route";
import userRouter from "./user-route";
const router = Router();

router.get("/", (req, res) => {
  res.send("ROOT ROUTER Express APP");
});

router.use("/auth", authRouter);
router.use("/threads", threadRouter);
router.use("/like", likeRouter);
router.use("/follow", followRouter);
router.use("/profile", profileRouter);
router.use("/user", userRouter);

export default router;
