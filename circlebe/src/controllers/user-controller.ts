import { Response, Request } from "express";
import * as userServices from "../services/user-service";

export const searchUsers = async function (req: Request, res: Response) {
  const query = req.query.q as string;
  const users = await userServices.searchUsers(query);
  res.json(users);
};

export const getAllUsers = async function (req: Request, res: Response) {
  const users = await userServices.getAllUsers();
  res.json(users);
};
