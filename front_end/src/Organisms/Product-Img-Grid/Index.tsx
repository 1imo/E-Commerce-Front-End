import { FC } from "react";
import ProductImgLrg from "../../Molecules/Product-Img-Lrg/Index";
import "./Style.css";

interface Image {
	src: string;
	alt: string;
}

interface Props {
	images: Array<Image>;
}

const ProductImgGrid: FC<Props> = ({ images }) => {
	return (
		<div className="product-img__grid">
			{images.map((image, index) => (
				<ProductImgLrg key={index} src={image.src} alt={image.alt} />
			))}
		</div>
	);
};

export default ProductImgGrid;
