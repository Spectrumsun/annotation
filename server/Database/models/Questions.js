import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    questionNumber: {
      type: Number,
      required: true,
    },
    annotations: {
      type: Array,
    }
  },
  { timestamps: true }
);

questionSchema.index({
  annotations: 'text',
});

module.exports = mongoose.model("QuestionSchema", questionSchema);
