import {
  getAllReports,
  getOneReport, // צריך לטפל בזה
  addReport,
  deleteOneReport,
} from "../services/ReportsServices.js";

import { getOneUser } from "../services/UserServices.js";

import { ReportsAllowedUpdates } from "../data/data.js";

export const getAllReportsController = async (req, res) => {
  try {
    const allReports = await getAllReports();

    res.status(200).send(allReports);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};


export const addReportsController = async (req, res) => {
  try {
    const report = req.body;
    const userId = req.body.userName
    const existUser = await getOneUser(userId);

    if(!existUser){
      res.status(404).send({message:"there is no such user , cant create REPORT" + userId})
    }
    const newReport = await addReport({ ...report, userId });
    res.status(200).send(newReport);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};
export const deleteReportsController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteReport = await deleteOneReport(id);
    if (!deleteReport) {
      res.status(404).send({ message: "no such report with the specified id" });
    }
    res.status(200).send(deleteReport);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};
export const getOneReportsController = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await getOneReport(id);
    if (!report) {
      res.status(404).send({ message: "no such report with the specified id" });
    }
    res.status(200).send(report);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};

export const updateReportsController = async (req, res) => {
  const reportUpdates = Object.keys(req.body);
  const isValidOperation = reportUpdates.every((reportUpdates) =>
    ReportsAllowedUpdates.includes(reportUpdates)
  );

  if (!isValidOperation) {
    res.status(400).send({ message: "Invalid updates" });
  }

  try {
    const { id } = req.params;
    const report = await getOneReport(id);
    if (!report) {
      res.status(404).send({ message: "report does not exist" });
    }
    reportUpdates.forEach((reportUpdates) => (report[reportUpdates] = req.body[reportUpdates]));
    await report.save();
    res.status(200).send(report);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};
