const mongoose = require('mongoose');
require('dotenv').config();
const fs = require('fs');
const Product = require('./models/product');

// Read Json File
const jsonProducts = require('./products.json');

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

// Import Data from DB
const importData = async () => {
  try {
    await Product.create(jsonProducts);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// delete data From DB
const deletedata = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data succesfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// console.log(process.argv);

// if (process.argv[2] === '--import') {
//   importData();
// } else if (process.argv[2] === '--delete') {
//   deletedata();
// }
importData();
