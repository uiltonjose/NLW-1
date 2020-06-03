import express from "express";
import cors from 'cors';
import routes from "./routes";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Webservice fully working!" });
});

app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(5000);
