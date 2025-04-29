import express from "express";
import { deleteUser, loginUser, logoutUser, signupUser, updateUser } from "../controller/user.controller.js";

const route = express.Router();

route.get("/signupUser", signupUser);

route.get("/loginUser", loginUser);

route.get("/logoutUser", logoutUser);

route.get("/updateUser", updateUser);

route.get("/deleteUser", deleteUser);

route.get("/current", signupUser);


export default route;
