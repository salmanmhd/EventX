import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URI = process.env.MONGODB_URI;
(async function () {
  await mongoose.connect(URI);
})();
const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  created_events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  invited_events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
});

const User = mongoose.model('User', UserSchema);
const Event = mongoose.model('Event', EventSchema);

export { User, Event };
