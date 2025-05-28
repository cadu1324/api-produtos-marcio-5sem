const productService = require('../service/productService');

const getAll = async (req, res) => {
  const result = await productService.getAllProducts();
  res.status(result.status).json(result.data);
};

const getById = async (req, res) => {
  const result = await productService.getProductById(req.params.id);
  res.status(result.status).json(result.data);
};

const create = async (req, res) => {
  const result = await productService.createProduct(req.body);
  res.status(result.status).json(result.data);
};

const update = async (req, res) => {
  const result = await productService.updateProduct(req.params.id, req.body);
  res.status(result.status).json(result.data);
};

const remove = async (req, res) => {
  const result = await productService.deleteProduct(req.params.id);
  res.status(result.status).json(result.data);
};

module.exports = { getAll, getById, create, update, remove };
