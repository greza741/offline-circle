import { CreateThreadDto } from "../dto/thread-dto";
import { prisma } from "../libs/prisma";
import * as threadRepository from "../repositories/thread-repo";

export const createThread = async (body: CreateThreadDto) => {
  return await threadRepository.createThread(body);
};

export const getThread = async (id: number) => {
  return await threadRepository.findThreadById(id);
};

export const getThreads = async () => {
  return;
};

export const getThreadsByLoggedInUser = async (
  userId: number,
  take: number
) => {
  return await threadRepository.findThreadByFollowerId(userId, take);
};

export const getThreadsByUsername = async () => {
  return;
};

export const createReply = async function (
  content: string,
  userId: number,
  mainThreadId: number
) {
  return prisma.thread.create({
    data: {
      content,
      userId,
      mainThreadId,
    },
    include: {
      user: true,
      mainThread: true,
    },
  });
};

export const getReplies = async function (id: number) {
  return prisma.thread.findMany({
    where: {
      mainThreadId: id,
    },
  });
};

export const replyCount = async function (id: number) {
  return prisma.thread.count({
    where: {
      mainThreadId: id,
    },
  });
};
