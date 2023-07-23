import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // URL to the image file
  type: { type: String, required: true }, // e.g., "Luxury", "Standard", etc.
}, {
  timestamps: true,
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
