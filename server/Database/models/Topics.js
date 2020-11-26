import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    path: {
      type: String,
    },
    ancestors: {
      type: Array,
    },
    parent: {
      type: String,
    },
    topicLevel: {
      type: String,
    }
  },
  { timestamps: true }
);

topicSchema.index( { ancestors: 1 } )

module.exports = mongoose.model("TopicSchema", topicSchema);
