import { useEffect, useRef, useState } from "react";
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

    const isControlled = useRef(!!value);

    const increaseBy = (value: number) => {
        if (isControlled.current && onChange) {
            return onChange({ product, count: value });
        }

        onChange && onChange({ product, count: value });
    };

    return {
        counter,
        increaseBy,
    };
};
