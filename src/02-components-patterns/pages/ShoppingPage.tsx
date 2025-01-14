import { useState } from "react";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import { Product } from "../interfaces";

// const products = [
const product: Product = { id: "1", title: "Coffee Mug", img: "./coffee-mug.png" };
const product2: Product = { id: "2", title: "Coffee Mug - Meme", img: "./coffee-mug2.png" };
//{ id: "2", title: "T-Shirt" },
// ];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({
        // '1': { ...product, count: 0 },
        // '2': { ...product2, count: 0 },
    });

    const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
        console.log("count", count);
        console.log("product", product);

        if (count === 0) {
            setShoppingCart((prev) => {
                const newCart = { ...prev };
                delete newCart[product.id];
                return newCart;
            });
            return;
        }

        setShoppingCart((prev) => {
            const productId = product.id;

            return {
                ...prev,
                [productId]: {
                    ...product,
                    count,
                },
            };
        });

        // setShoppingCart({
        //     ...shoppingCart,
        //     [productId]: {
        //         ...shoppingCart[productId],
        //         count: shoppingCart[productId]?.count ? shoppingCart[productId].count + count : count,
        //     },
        // });
    };

    return (
        <div style={{ padding: "20px", width: "100%" }}>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {/* {products.map((product) => ( */}

                <ProductCard
                    product={product}
                    className="bg-dark"
                    onChange={onProductCountChange}
                    value={shoppingCart[product.id]?.count}
                >
                    <ProductCard.ProductImage className="custom-image" />
                    <ProductCard.ProductTitle className="text-white" />
                    <ProductCard.ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product2}
                    className="bg-dark"
                    onChange={onProductCountChange}
                    value={shoppingCart[product2.id]?.count}
                >
                    <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                {/* ))} */}

                <div className="shopping-cart">
                    {/* <ProductCard product={product} className="bg-dark" style={{ width: "100px" }}>
                        <ProductCard.ProductImage className="custom-image" />
                        <ProductCard.ProductButtons className="custom-buttons" />
                    </ProductCard> */}

                    {Object.values(shoppingCart).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark"
                            style={{ width: "100px" }}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage
                                className="custom-image"
                                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                            />
                            <ProductTitle className="text-white" title={`${product.count}`} />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))}
                </div>
            </div>
            <div>
                <code>
                    <pre>{JSON.stringify(shoppingCart, null, 5)}</pre>
                </code>
            </div>
        </div>
    );
};
