import { Schema } from 'mongoose';

export const userSchema = new Schema({
  name: String,
  age: Number,
  breed: String,
  numberOfAppointments: Number,
  password: String,
  username: String,
  email: String,
});
