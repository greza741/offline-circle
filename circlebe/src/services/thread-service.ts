import { CreateThreadDto } from "../dto/thread-dto";
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

export const getReplies = async () => {
  return;
};
