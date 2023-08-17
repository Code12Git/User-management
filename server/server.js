import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import cors from "cors";
//Fetching dotenv file
dotenv.config({ path: "./config.env" });

//App router
const app = express();

//Assigning port
const PORT = process.env.PORT;

//Middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/users", userRoute);

//Test port
app.get("/", (req, res) => {
  res.send("Test Route");
});

//Listening Port
app.listen(PORT, () => {
  console.log(`Server is up on PORT: ${PORT}`);
});
