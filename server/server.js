import config from './config/config.js';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import ingredientsRouter from './routes/ingredients.js';

const app = express();

/* Config */
const { MONGODB_URI, PORT } = config;

/* APIs */
app.use(bodyParser.json());

app.use(cors());

app.use('/api/ingredients', ingredientsRouter);

/* Database */
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

/* Server */
app.listen(PORT, () => console.log('Server started on port ' + PORT));