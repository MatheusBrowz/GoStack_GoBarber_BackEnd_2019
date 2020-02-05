import { Router } from "express";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/users", UserController.store);

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
