import express, { Application, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import StatusCodes from "http-status-codes";

// initialize app
const app: Application = express();

const { NODE_ENV = "development", PORT = 3232 } = process.env;

// middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// dummy route
app.get("/", (_, res: Response<{ message: string }>): void => {
  res
    .status(StatusCodes.OK)
    .json({
      message: "Hello World!",
    })
    .end();
});

// initialize server
app.listen(PORT, () =>
  console.log(
    `Server started on ${
      NODE_ENV === "development"
        ? "http://localhost:" + PORT
        : "https://somedomain.com"
    }`
  )
);
