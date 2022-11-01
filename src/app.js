import express from "express"; //express를 설치했기 때문에 가져올 수 있다.
import config from "./config.js";
import db from "./database/sequalize/index.js";
import cors from "cors";
import practiceRouter from "./router/practice.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import { connectDB } from "./database/mongoose/index.js";
import { Server } from "socket.io";

const app = express();

const corsOptions = {
  origin: config.host.cors,
};

app.use(express.json()); // REST API, Body
app.use(express.urlencoded({ extended: true })); // HTML Form => Body
app.use(cookieParser()); // cookie 사용시 설정
app.use(express.static("public")); // option도 가능
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors(corsOptions));

app.use("/practice", practiceRouter);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: "Something went wrong" });
});
/**
 * sequelize
 */
// db.sync()
//   .then(() => {
//     console.log("DB Connection Success!");
//   })
//   .catch(console.error);

/**
 * mongoose
 */
connectDB().then(() => {
  console.log("DB Connection Success!");
  const server = app.listen(config.host.port);
  const socketIO = new Server(server);

  socketIO.on("connection", (socket) => {
    console.log("Client is here");
    socketIO.emit("pratice", "hello");
  });
});
