import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// json settings
app.use(express.json({ limit: "16kb" }));

// url settings
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// static files setting
app.use(express.static("public"));

app.use(cookieParser());
export { app };
