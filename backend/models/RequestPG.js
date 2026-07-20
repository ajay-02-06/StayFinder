const mongoose = require("mongoose");

const requestPGSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    amenities: {
      type: [String],
      default: [],
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    availability: {
      type: String,
      enum: ["Available", "Full"],
      default: "Available",
    },

    type: {
      type: String,
      enum: ["Boys", "Girls", "Co-Living"],
      default: "Co-Living",
    },

    latitude: {
      type: Number,
      required: true,
    },

    longitude: {
      type: Number,
      required: true,
    },

    ownerName: {
      type: String,
      required: true,
    },

    ownerPhone: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RequestPG", requestPGSchema);