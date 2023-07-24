import db from "../../config/db.js";
import asyncHandler from "express-async-handler";

let getAll = asyncHandler(async (req, res) => {
  let all = await db.models.Medication.findAll();
  res.status(200).json(all);
});

let addMedication = asyncHandler(async (req, res) => {
  let obj = req.body;
  await db.models.Medication.create(obj);
  res.status(200).end();
});

let deleteMedication = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let medication = await db.models.Medication.findByPk(id);
  console.log(id, "this is medication id");

  if (medication) {
    await medication.destroy();
  }
  res.status(200).end();
});

const updateMedication = asyncHandler(async (req, res) => {
  let { id } = req.params;
  let medication = await db.models.Medication.findByPk(id);
  let obj = req.body;

  if (medication) {
    medication.set(obj);
  }

  medication.save();
  res.status(200).end();
});

const getMedById = asyncHandler(async (req, res) => {
  let { id } = req.params;
  let medications = await db.models.Medication.findAll();

  let findMed = medications.filter((medication) => medication.id == id);
  res.status(200).json(findMed);
});

export {
  getAll,
  addMedication,
  updateMedication,
  deleteMedication,
  getMedById,
};
