import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Medication extends Sequelize.Model {}

  Medication.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      company: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a company name",
          },

          notEmpty: {
            msg: "Provide a company name",
          },
        },
      },

      brand_name: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a brand name",
          },
          notEmpty: {
            msg: "Provide a brand_Name",
          },
        },
      },

      generic_name: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a generic name",
          },
          notEmpty: {
            msg: "Provide a brand name",
          },
        },
      },

      diagnosis_code: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a diagnosis code",
          },
          notEmpty: {
            msg: "Provide a diagnosis code",
          },
        },
      },

      nhs_number: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a nhs number",
          },
          notEmpty: {
            msg: "Provide a nhs number",
          },
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Medication;
};
