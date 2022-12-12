const Product = require('./../models/product');

const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({});

  const products = await Product.find({}).sort('-name price');

  // throw new Error('testing async errors');
  res.status(200).json({ nbHits: products.length, products });
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  if (sort) console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
