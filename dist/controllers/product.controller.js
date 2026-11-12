import * as productService from '../services/product.service';
import { createProductSchema, listProductsSchema, productIdSchema, updateProductSchema } from "../validators/product.validator";
import { AppError } from "../utils/apperror";
export const createProduct = async (req, res) => {
    const data = createProductSchema.parse(req.body);
    const product = await productService.createProduct(data);
    res.status(201).json({ error: null, data: product });
};
export const listProducts = async (req, res) => {
    const { offset, limit, name } = listProductsSchema.parse(req.query);
    const products = await productService.listProducts(offset, limit, name);
    res.status(200).json({ error: null, data: products });
};
export const getProduct = async (req, res) => {
    const { id } = productIdSchema.parse(req.params);
    const product = await productService.getProductByIdWithDetails(id);
    if (!product)
        throw new AppError('Produto não encontrado', 404);
    res.status(200).json({ error: null, data: product });
};
export const updateProduct = async (req, res) => {
    const { id } = productIdSchema.parse(req.params);
    const data = updateProductSchema.parse(req.body);
    const updatedProduct = await productService.updateProduct(id, data);
    if (!updatedProduct)
        throw new AppError('Produto não encontrado', 404);
    res.status(200).json({ error: null, data: updatedProduct });
};
export const deleteProduct = async (req, res) => {
    const { id } = productIdSchema.parse(req.params);
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct)
        throw new AppError('Produto não encontrado', 404);
    res.status(200).json({ error: null, data: null });
};
//# sourceMappingURL=product.controller.js.map