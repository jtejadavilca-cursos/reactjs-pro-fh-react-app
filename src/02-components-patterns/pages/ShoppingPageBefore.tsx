import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import { Product } from "../interfaces";
import { useShoppingCart } from "../hooks";

const product: Product = { id: "1", title: "Coffee Mug", img: "./coffee-mug.png" };
const product2: Product = { id: "2", title: "Coffee Mug - Meme", img: "./coffee-mug2.png" };

export const ShoppingPageBefore = () => {
    const { shoppingCart, onProductCountChange } = useShoppingCart();

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
