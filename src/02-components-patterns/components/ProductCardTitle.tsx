import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext(ProductContext);
    const { title: titleProduct } = product;
    const titleToShow = title ?? titleProduct ?? "No title";

    return <span className={styles.productDescription}>{titleToShow}</span>;
};
