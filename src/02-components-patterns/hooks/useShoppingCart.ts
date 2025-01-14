import { useState } from "react";
import { Product } from "../interfaces";

interface ProductInCart extends Product {
    count: number;
}

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
        console.log("onProductCountChange", count, product);
        setShoppingCart((oldShoppingCart) => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            const newValue = Math.max(0, productInCart.count + count);

            if (newValue === 0) {
                const newCart = { ...oldShoppingCart };
                delete newCart[product.id];
                return newCart;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {
                    ...product,
                    count: newValue,
                },
            };
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
};
