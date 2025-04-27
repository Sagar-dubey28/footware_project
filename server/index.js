import express from "express";
import connectDB from "./src/config/db.js";
import route from "./src/route/user.route.js";

const app = express();

app.use(express.json());

//routing
app.use("/api/v1/", route);

//default route
app.get("/", (req, res) => {
  res.send("yes i am testing u");
});

//db connection
connectDB();

//server running
app.listen(500, () => {
  console.log("i am running");
});
