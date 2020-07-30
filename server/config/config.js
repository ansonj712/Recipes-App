import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

export default {
  PORT: process.env.PORT,
  MONGODB_URI: 'mongodb+srv://' + DB_USER + ':' + DB_PASS + '@recipes.dfcxg.mongodb.net/' + DB_NAME
};

