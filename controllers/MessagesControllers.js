import {
  getAllMessages,
  addMessage, // צריך לטפל בזה
  getOneMessage,
  deleteOneMessage,
} from "../services/PmServices.js";

import { MessagesAllowedUpdates } from "../data/data.js";

export const getAllMessageController = async (req, res) => {
  try {
    const allMessages = await getAllMessages();

    res.status(200).send(allMessages);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};


export const addMessageController = async (req, res) => {
  try {
    const message = req.body;

    const newMessage = await addMessage({ ...message });
    res.status(200).send(newMessage);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};
export const deleteMessagsController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMessage = await deleteOneMessage(id);
    if (!deleteMessage) {
      res.status(404).send({ message: "no such message with the specified id" });
    }
    res.status(200).send(deleteMessage);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};
export const getOneMessageController = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await getOneMessage(id);
    if (!message) {
      res.status(404).send({ message: "no such message with the specified id" });
    }
    res.status(200).send(report);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};

export const updateMessageController = async (req, res) => {
  const messageUpdates = Object.keys(req.body);
  const isValidOperation = messageUpdates.every((messageUpdates) =>
    MessagesAllowedUpdates.includes(messageUpdates)
  );

  if (!isValidOperation) {
    res.status(400).send({ message: "Invalid updates" });
  }

  try {
    const { id } = req.params;
    const message = await getOneMessage(id);
    if (!message) {
      res.status(404).send({ message: "message does not exist" });
    }
    messageUpdates.forEach((messageUpdates) => (message[messageUpdates] = req.body[messageUpdates]));
    await message.save();
    res.status(200).send(report);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};
