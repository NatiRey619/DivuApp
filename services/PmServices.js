import { MessagesModel } from "../models/MessagesModel.js";

export const getAllMessages = () => {
  return PmMessageModel.find({});
};

export const addMessage = (messagesObj) => {
  const newMessage = new PmMessageModel({ ...messagesObj });
  return newMessage.save();
};

export const getOneMessage = (id) => {
  return PmMessageModel.findOne({ _id: id });
};

export const deleteOneMessage = (id) => {
  return PmMessageModel.findOneAndDelete({ _id: id });
};
