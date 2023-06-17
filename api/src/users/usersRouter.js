import { Router } from "express";
import { UserController } from "./usersController.js";

export const userRouter = new Router();
export const userDefaultPath = "/api/users";

userRouter.get("/login", UserController.login);
userRouter.get("/", UserController.getAll);
userRouter.get("/:id", UserController.getByID);
userRouter.post( "/:id", UserController.update);
userRouter.post("/", UserController.create);
