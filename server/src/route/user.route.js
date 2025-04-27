import express from "express";
import { signupUser } from "../controller/user.controller.js";

const route = express.Router();

route.get("/createUser", signupUser);

export default route;
