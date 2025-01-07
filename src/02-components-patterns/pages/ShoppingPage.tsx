import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";

// const products = [
const product = { id: "1", title: "Coffee Mug", img: "./coffee-mug.png" };
//{ id: "2", title: "T-Shirt" },
// ];

export const ShoppingPage = () => {
    return (
        <div style={{ padding: "20px", width: "100%" }}>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {/* {products.map((product) => ( */}

                <ProductCard product={product} className="bg-dark">
                    <ProductCard.ProductImage className="custom-image" />
                    <ProductCard.ProductTitle className="text-white" />
                    <ProductCard.ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} className="bg-dark">
                    <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
                    <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                    <ProductTitle style={{ fontWeight: "bold" }} />
                    <ProductButtons
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            // backgroundColor: "#70D1F8",
                        }}
                    />
                </ProductCard>
                {/* ))} */}
            </div>
        </div>
    );
};
