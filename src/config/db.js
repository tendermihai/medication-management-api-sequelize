import { Sequelize } from "sequelize";
import Medication from "../medication/model/medication.js";

const connectDb = () => {
  try {
    let sequelize = new Sequelize(
      "medication_management_db",
      "root",
      "password95",
      {
        host: "localhost",
        dialect: "mysql",
      }
    );

    let db = {
      models: {},
    };

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.models.Medication = Medication(sequelize);

    return db;
  } catch (error) {
    console.log(error);
  }
};

let db = connectDb();
export default db;
