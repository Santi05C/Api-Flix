import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 500,
    },
    url: {
      type: String,
      required: true,
      max: 500,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      max: 500,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
