import { createContext } from "react";

import { useProduct } from "../hooks";
import styles from "../styles/styles.module.css";
import {
    onChangeArgs,
    Product,
    ProductCardHandlers,
    ProductCartInitialValues,
    ProductContextProps,
} from "../interfaces";
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
    //children?: ReactElement | ReactElement[];
    children?: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: ProductCartInitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({
        onChange,
        product,
        value,
        initialValues,
    });

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
                maxCount,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children &&
                    children({
                        count: counter,
                        increaseBy,
                        isMaxCountReached,
                        maxCount,
                        product,
                        reset,
                    })}
            </div>
        </Provider>
    );
};

ProductCard.ProductImage = ProductImage;
ProductCard.ProductTitle = ProductTitle;
ProductCard.ProductButtons = ProductButtons;
