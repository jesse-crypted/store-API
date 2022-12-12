const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Product name must be provided'] },
  price: { type: Number, required: [true, 'Product price must be provided'] },
  company: {
    type: String,
    // enum: ['ikea', 'liddy', 'caressa', 'marcos'] },
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
  },
  rating: { type: Number, default: 4.5 },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Product', productSchema);
