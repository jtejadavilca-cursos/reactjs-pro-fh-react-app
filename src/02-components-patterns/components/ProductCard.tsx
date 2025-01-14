import { createContext, ReactElement } from "react";

import { useProduct } from "../hooks";
import styles from "../styles/styles.module.css";
import { onChangeArgs, Product, ProductContextProps } from "../interfaces";
import { ProductImage } from "./ProductCardImage";
import { ProductTitle } from "./ProductCardTitle";
import { ProductButtons } from "./ProductCardButtons";

export const ProductContext = createContext({
    // counter: 0,
    // increaseBy: (value: number) => {},
    // product: {} as Product,
} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
                {/* <ProductImage img={product.img} title={product.title} />

            <ProductTitle title={product.title} />

            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    );
};

ProductCard.ProductImage = ProductImage;
ProductCard.ProductTitle = ProductTitle;
ProductCard.ProductButtons = ProductButtons;
