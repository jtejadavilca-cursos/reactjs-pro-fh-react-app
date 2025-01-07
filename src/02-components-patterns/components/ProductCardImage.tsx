import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img }: { img?: string }) => {
    const { product } = useContext(ProductContext);
    const { img: imgProduct, title } = product;
    const imgToShow = img ?? imgProduct ?? noImage;

    return <img className={styles.productImg} src={imgToShow} alt={title} />;
};
