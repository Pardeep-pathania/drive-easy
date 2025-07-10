import express from "express";
import { protect } from "../middlewares/auth.js";
import { changeRoleToOwner, deleteCar, getOwnerCars, toggleCarAvailability } from "../controllers/ownerController.js";
import upload from "../middlewares/multer.js";
import { addCar } from "../controllers/ownerController.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner)
ownerRouter.post("/add-car", upload.single("image"), protect, addCar)
ownerRouter.get("/cars", protect, getOwnerCars)
ownerRouter.post("/toogle-car", protect, toggleCarAvailability)
ownerRouter.post("/delete-car", protect, deleteCar)

ownerRouter.get('/dashboard', protect, getDataboardData)

export default ownerRouter;