import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  }
});

const Ingredient = mongoose.model('ingredient', IngredientSchema); 

export default Ingredient;