import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}
export const ProductImage = ({ img, className, style }: Props) => {
    const { product } = useContext(ProductContext);
    const { img: imgProduct, title } = product;
    const imgToShow = img ?? imgProduct ?? noImage;

    return <img className={`${styles.productImg} ${className}`} src={imgToShow} alt={title} style={style} />;
};
