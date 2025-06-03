const isValidObjectId = require('../middlewares/isValidId');
const Product = require('../model/productModel');

const getAllProducts = async () => {
  const products = await Product.find();
  return { status: 200, data: products };
};

const getProductById = async (id) => {
  if (!isValidObjectId(id)) {
    return { status: 400, data: { message: 'ID inválido (esperado ObjectId de 24 caracteres)' } };
  }

  const product = await Product.findById(id);
  if (!product) {
    return { status: 404, data: { message: 'Produto não encontrado' } };
  }

  return { status: 200, data: product };
};

const getProductByName = async (name) => {
  const product = await Product.find({ name: { $regex: new RegExp(name, 'i') } });

  if (product.length === 0) {
    return { status: 404, data: { message: 'Nenhum produto encontrado com este nome' } };
  }

  return { status: 200, data: product };
};

const createProduct = async (body) => {
  const newProduct = new Product(body);
  await newProduct.save();
  return { status: 201, data: newProduct };
};

const updateProduct = async (id, body) => {
  if (!isValidObjectId(id)) {
    return { status: 400, data: { message: 'ID inválido (esperado ObjectId de 24 caracteres)' } };
  }

  const updated = await Product.findByIdAndUpdate(id, body, { new: true });
  if (!updated) {
    return { status: 404, data: { message: 'Produto não encontrado' } };
  }

  return { status: 200, data: updated };
};

const deleteProduct = async (id) => {
  if (!isValidObjectId(id)) {
    return { status: 400, data: { message: 'ID inválido (esperado ObjectId de 24 caracteres)' } };
  }

  const deleted = await Product.findByIdAndDelete(id);
  if (!deleted) {
    return { status: 404, data: { message: 'Produto não encontrado' } };
  }

  return { status: 200, data: { message: 'Produto deletado com sucesso' } };
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
