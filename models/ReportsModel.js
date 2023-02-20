import mongoose from "mongoose";

const ReportsSchema = new mongoose.Schema({

  isAdmin: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  StartShift: {
    type:String,
    default: null,
  },
  EndShift: {
    type:String,
    default: null,
  },
  userName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
   },

  },

  
);

// model related to the specific schema
export const ReportsModel = mongoose.model("Reports", ReportsSchema);
