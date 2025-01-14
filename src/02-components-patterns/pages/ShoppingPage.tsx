import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import { Product } from "../interfaces";
import { products } from "../data/products";

const product: Product = products[0];

export const ShoppingPage = () => {
    return (
        <div style={{ padding: "20px", width: "100%" }}>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark"
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                <ProductTitle className="text-white" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>
        </div>
    );
};
