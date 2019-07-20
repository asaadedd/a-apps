import { Schema } from 'mongoose';

export const userSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  dateOfBirth: String
});
