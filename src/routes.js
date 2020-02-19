import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import ProviderController from "./app/controllers/ProviderController";
import AppointmentController from "./app/controllers/AppointmentController";
import ScheduleController from "./app/controllers/ScheduleController";
import NotificationController from "./app/controllers/NotificationController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

// users
routes.post("/users", UserController.store);
routes.put("/users", UserController.update);

// providers
routes.get("/providers", ProviderController.index);

// schedules
routes.get("/schedules", ScheduleController.index);

// appointments
routes.get("/appointments", AppointmentController.index);
routes.post("/appointments", AppointmentController.store);

// notifications
routes.get("/notifications", NotificationController.index);
routes.put("/notifications/:id", NotificationController.update);

// files
routes.post("/files", upload.single("file"), FileController.store);

export default routes;
