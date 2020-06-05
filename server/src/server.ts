import express from "express";
import cors from 'cors';
import path from "path";
import routes from "./routes";
import { errors } from "celebrate";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Webservice fully working!" });
});

app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(5000);
