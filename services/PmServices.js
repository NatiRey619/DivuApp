import { MessagesModel } from "../models/MessagesModel.js";

export const getAllMessages = () => {
  return MessagesModel.find({});
};

export const addMessage = (messagesObj) => {
  const newMessage = new MessagesModel({ ...messagesObj });
  return newMessage.save();
};

export const getOneMessage = (id) => {
  return MessagesModel.findOne({ _id: id });
};

export const deleteOneMessage = (id) => {
  return MessagesModel.findOneAndDelete({ _id: id });
};
