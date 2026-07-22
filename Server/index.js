import express from "express";
import userRoute from "./routes/user.js";
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"], // React frontend
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);
app.get("/", (req, res)=> {
    return res.send("Hello World");
})


app.use("/api", userRoute);

app.listen(8000, ()=>{console.log("Server is running on 8000")});