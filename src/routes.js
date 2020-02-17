import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import ProviderController from "./app/controllers/ProviderController";
import AppointmentController from "./app/controllers/AppointmentController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.post("/users", UserController.store);
routes.put("/users", UserController.update);
routes.get("/providers", ProviderController.index);
routes.post("/appointments", AppointmentController.store);

routes.post("/files", upload.single("file"), FileController.store);

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
