import { products } from "../data";

const getProductById = (id) => {
    const product = products.find(product => product.index === Number(id));
    if (!product)
    {
        return {
            code: 401,
            message: "Product not found",
        }
    }
    else return {
        code: 200,
        data: product
    }
}

export { getProductById };