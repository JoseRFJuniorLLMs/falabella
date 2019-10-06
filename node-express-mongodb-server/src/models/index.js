import mongoose from 'mongoose';

import User from './user';
import Beer from './beer';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Beer };

export { connectDb };

export default models;
