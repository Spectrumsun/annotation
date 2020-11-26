import bodyParser from "body-parser";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes";
import connectDatabase from './Database';

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

connectDatabase()

const port = process.env.PORT || 5000;
app.use("/api/v1/", routes);
app.listen(port);

console.log(`Find me on http://localhost:${port}`);

export default app;
