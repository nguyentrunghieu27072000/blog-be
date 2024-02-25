import express from "express";
import { getUsers } from "../src/controllers/users.mjs";
const userRoute = express.Router();

userRoute.get('/', getUsers)

export default userRoute;