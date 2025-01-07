import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const products = [
    { id: "1", title: "Coffee Mug", img: "./coffee-mug.png" },
    //{ id: "2", title: "T-Shirt" },
];

export const ShoppingPage = () => {
    return (
        <div style={{ padding: "20px", width: "100%" }}>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </ProductCard>

                    // <ProductCard key={product.id} product={product}>
                    //     <ProductCard.ProductImage />
                    //     <ProductCard.ProductTitle />
                    //     <ProductCard.ProductButtons />
                    // </ProductCard>
                ))}
            </div>
        </div>
    );
};
