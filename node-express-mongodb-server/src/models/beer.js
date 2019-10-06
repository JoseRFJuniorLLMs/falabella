import mongoose from 'mongoose';

const beerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brewery: {
    type: String,
    required: true,
  },
  coutry: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: false,
  },
  quantity: {
    type: String,
    required: true,
  },
  totalUnity: {
    type: String,
    required: false,
  },
  totalBox: {
    type: String,
    required: false,
  },
  currency: {
    type: String,
    required: true,
  },
  probar: {
    type: String,
    required: true,
  },
  star: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: false,
  },
  user: {
     type: mongoose.Schema.Types.ObjectId, ref: 'User' 
    },
});

const Beer = mongoose.model('Beer', beerSchema);

export default Beer;
