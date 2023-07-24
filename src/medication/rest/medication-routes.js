import express from "express";

import {
  getAll,
  addMedication,
  deleteMedication,
  updateMedication,
  getMedById,
} from "../service/medication-service.js";

import errorHandler from "../../middleware/error-middleware.js";

const app = express.Router();

function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

app.route("/all").get(getAll, errorHandler);

app.route("/add").post(addMedication, errorHandler);

app.route("/delete/:id").delete(deleteMedication, errorHandler);

app.route(`/update/:id`).put(updateMedication, errorHandler);

export default app;
