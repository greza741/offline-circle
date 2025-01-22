import { prisma } from "../libs/prisma";
import * as userRepositories from "../repositories/user-repo";

export const searchUsers = async function (query: string) {
  return prisma.user.findMany({
    where: {
      OR: [
        { username: { contains: query, mode: "insensitive" } },
        { email: { contains: query, mode: "insensitive" } },
      ],
    },
    select: { id: true, username: true, email: true, profile: true },
  });
};

// Get all users
export const getAllUsers = async function () {
  return prisma.user.findMany({
    select: { id: true, username: true, email: true, profile: true },
  });
};
