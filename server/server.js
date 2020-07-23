const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const ingredientsRouter = require('./routes/ingredients');

const app = express();

/* Config */
const uri = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;

/* APIs */
app.use(bodyParser.json());

app.use(cors());

app.use('/api/ingredients', ingredientsRouter);

/* Database */
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

/* Server */
app.listen(port, () => console.log(`Server started on port ${port}`));