import { FC } from "react";
import "./Index.css";

interface Props {
	src: string;
	alt: string;
}

const ProductImgLrg: FC<Props> = ({ src, alt }) => {
	return <img className="product-img__lrg" src={src} alt={alt} />;
};

export default ProductImgLrg;
