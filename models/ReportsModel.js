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
    type:Date,
    default: null,
  },
  EndShift: {
    type:Date,
    default: null,
  },
  userName: {
    type: String,
    required: true,
  },

  
});

// model related to the specific schema
export const ReportsModel = mongoose.model("Reports", ReportsSchema);
