const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");
const { products } = new PrismaClient();

const getProducts = async (req, res) => {
  const allProducts = await products.findMany({
    select: { id: true, name: true, image: true, price: true },
  });
  res.json(allProducts);
};

const getSingleProduct = async (req, res) => {
  const product_id = req.params.id;
  const product = await products.findUnique({
    where: { id: parseInt(product_id) },
  });
  if (!product) {
    res.status(400).send({ msg: `no product with the id ${product_id}...` });
  }
  res.json(product);
};

const addProduct = async (req, res) => {
  const { name, image, price } = req.body;
  const newProduct = await products.create({
    data: { name, image, price },
  });
  res.json({ msg: "product added", newProduct });
};

const updateProduct = async (req, res) => {
  const product_id = req.params.id;
  const { name, image, price } = req.body;
  const productExist = await products.findUnique({
    where: { id: parseInt(product_id) },
  });
  if (!productExist) {
    res.status(400).json({ msg: `no product with id ${product_id}...` });
  }
  const updatedProduct = await products.update({
    data: { name, image, price },
    where: { id: parseInt(product_id) },
  });
  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const product_id = req.params.id;
  const productExist = await products.findUnique({
    where: { id: parseInt(product_id) },
  });
  if (!productExist) {
    res.status(400).json(`no product with id ${product_id}`);
  }
  await products.delete({
    where: { id: parseInt(product_id) },
  });
  res.json({ msg: `product with id ${product_id} is deleted..` });
};

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
