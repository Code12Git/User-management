import express from "express";
import {
  createUserDetails,
  deleteUserDetails,
  getUserDetails,
  updateUserDetails,
} from "../controllers/userController.js";

//Router
const router = express();

//Create User
router.post("/", createUserDetails);

//Delete User
router.delete("/:id", deleteUserDetails);

//Update User
router.put("/:id", updateUserDetails);

//Getting user details
router.get("/", getUserDetails);

export default router;
