import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.put("/users", UserController.update);

/*
routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Diego Fernandes",
    email: "matheuslimaworks@gmail.com",
    password_hash: "1234",
  });

  return res.json(user);
}); */

export default routes;
