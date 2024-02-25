import express from "express";
import userRoute from "./routers/user.mjs"

const app = express();

app.use('/users', userRoute);


app.listen(3000)