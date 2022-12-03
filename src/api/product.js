import { products } from "../data";
import { Blog } from "../data";

export const getProductById = (id) => {
    const product = products.find(product => product.index === Number(id));
    if (!product) { 
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
export const getBlogById = (id) => {
    const blog = Blog.find(blog => blog.article_id === Number(id));
    if (!blog) { 
        return {
            code: 401,
            message: "Blog not found",
        }
    }
    else return {
        code: 200,
        data: blog
    }
}