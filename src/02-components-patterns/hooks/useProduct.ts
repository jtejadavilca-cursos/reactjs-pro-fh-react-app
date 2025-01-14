import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product, ProductCartInitialValues } from "../interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: ProductCartInitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount && value > 0 && newValue > initialValues.maxCount) return;

        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    };

    const reset = () => {
        setCounter(initialValues?.count || value);
    };

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value);
    }, [value]);

    return {
        counter,
        isMaxCountReached: counter === initialValues?.maxCount,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset,
    };
};
