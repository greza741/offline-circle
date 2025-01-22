import { User } from "@prisma/client";

export type UserEntity = User;

export type FindUser = Omit<UserEntity, "password">;
