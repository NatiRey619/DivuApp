import mongoose from "mongoose";

const ReportsSchema = new mongoose.Schema({

  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  StartShift: {
    type:String,
    default: 0,
    required:true

  },
  EndShift: {
    type:String,
    default: 0,
    required:true
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
      