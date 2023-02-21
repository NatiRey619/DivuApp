import { ReportsModel } from "../models/ReportsModel.js";

export const getAllReports = () => {
  // return ReportsModel.find({}).populate('userName'); // pulling User info into Reports
  return ReportsModel.find({}).populate({path:"userName", select:"-password"}); // pulling User info into Reports without password

};

export const addReport = (reportObj, user) => {
  const newReport = new ReportsModel({ ...reportObj, user });
  return newReport.save();
};

export const getOneReport = (id) => {
  return ReportsModel.findOne({ _id: id });
};

export const deleteOneReport = (id) => {
  return ReportsModel.findOneAndDelete({ _id: id });
};
