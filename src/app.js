import db from "../src/config/db.js";
import express from "express";
import { Sequelize } from "sequelize";
import cors from "cors";
import medicationRoute from "../src/medication/rest/medication-routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/medications", medicationRoute);

db.sequelize.sync().then((results) => {
  app.listen(7070, () => {
    console.log("Server is listening on 7070");
  });
});
