import mongoose from "mongoose";

const PmMessageSchema = new mongoose.Schema({

  workerName: {
    type: String,
    required:true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  email: {
    type: String,
    required: true,
  },
  innerMessage: {
    type:String,
    required: true,
    default:null,
  },

  userName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
   },

  

});
  
// model related to the specific schema
export const MessagesModel = mongoose.model("PmMessage", PmMessageSchema);

