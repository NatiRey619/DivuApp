import { ReportsModel } from "../models/ReportsModel.js";

export const getAllReports = () => {
  return ReportsModel.find({});
};

export const addReport = (reportObj) => {
  const newReport = new ReportsModel({ ...reportObj });
  return newReport.save();
};

export const getOneReport = (id) => {
  return ReportsModel.findOne({ _id: id });
};

export const deleteOneReport = (id) => {
  return ReportsModel.findOneAndDelete({ _id: id });
};
