import config from './config/config.js';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
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

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

/* Database */
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

/* Server */
app.listen(process.env.PORT || PORT, () => console.log('Server started on port ' + PORT));