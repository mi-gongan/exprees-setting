import express from "express"; //express를 설치했기 때문에 가져올 수 있다.
import { config } from "./config.js";
import { db } from "./db/database.js";
import { cors } from "cors";
import practiceRouter from "./router/pratice.js";

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

app.use("/pratice", practiceRouter);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: "Something went wrong" });
});

db.getConnection().then((connection) => console.log(connection));
app.listen(config.host.port);