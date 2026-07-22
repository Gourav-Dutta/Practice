import {Router} from "express";
import { getUser, postUser } from "../Controllers/user.controller.js";

const route = Router();


route.get("/user", getUser);
route.post("/addUser", postUser);


export default route;