import { Request, Response } from "express";
import * as threadService from "../services/thread-service";
import { CreateThreadDto } from "../dto/thread-dto";
import uploader from "../libs/cloudinary";

export const createThread = async (req: Request, res: Response) => {
  try {
    const body: CreateThreadDto = req.body;

    body.userId = res.locals.user.id;
    if (req.files) {
      body.images = await uploader(req.files as Express.Multer.File[]);
    }

    const thread = await threadService.createThread(body);
    res.json(thread);
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getThreads = async (req: Request, res: Response) => {
  try {
    const threads = await threadService.getThreads();
    res.json(threads);
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({
      message: err.message,
    });
  }
};

export const detailThread = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const thread = await threadService.getThread(+id);
    res.json(thread);
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({
      message: err.message,
    });
  }
};

export const feed = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const take = req.query.take ? +req.query.take : 0;

    const threads = await threadService.getThreadsByLoggedInUser(userId, take);
    res.json(threads);
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({
      message: err.message,
    });
  }
};

export const createReply = async function (req: Request, res: Response) {
  const { content, userId, mainThreadId } = req.body;
  const reply = await threadService.createReply(content, userId, mainThreadId);
  res.json(reply);
};

export const getReplies = async function (req: Request, res: Response) {
  const { id } = req.params;
  const replies = await threadService.getReplies(+id);
  res.json(replies);
};

export const replyCount = async function (req: Request, res: Response) {
  const { id } = req.params;
  const count = await threadService.replyCount(+id);
  res.json(count);
};
