import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
        setCounter(value);
    }, [value]);

    const increaseBy = (value: number) => {
        const newValue = Math.max(0, counter + value);

        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    };

    return {
        counter,
        increaseBy,
    };
};
