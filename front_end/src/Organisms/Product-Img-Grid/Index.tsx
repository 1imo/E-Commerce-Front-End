import { FC } from "react";
import ProductImgLrg from "../../Molecules/Product-Img-Lrg/Index";
import "./Style.css";

interface Props {
	images: Array<string>;
	alt: string;
}

const ProductImgGrid: FC<Props> = ({ images, alt }) => {
	return (
		<div className="product-img__grid">
			{images.map((image, index) => (
				<ProductImgLrg key={index} src={image} alt={alt} />
			))}
		</div>
	);
};

export default ProductImgGrid;
