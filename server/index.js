import express from "express";
import connectDB from "./src/config/db.js";
import route from "./src/route/user.route.js";
import cors from "cors";

const app = express();

app.use(express.json());

//built in middleware
app.use(express.json());
app.use(cors());

//routing
app.use("/api/v1", route);

//default route
app.get("/", (req, res) => {
  res.send("yes i am testing u");
});

//db connection
connectDB();

//error middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || "Error is there";
  res.status(statusCode).json({
    success: false,
    statusCode,
    errorMessage,
  });
});

//server running
app.listen(500, () => {
  console.log("i am running");
});
