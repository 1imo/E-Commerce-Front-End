import { FC, useEffect, useRef } from "react";
import ProductImgLrg from "../../Molecules/Product-Img-Lrg/Index";
import "./Style.css";
import { useDesktopScroll } from "../../Styles/Globals"; // Assuming the path is correct

interface Props {
	images: Array<string>;
	alt: string;
}

const ProductImgGrid: FC<Props> = ({ images, alt }) => {
	const gridRef = useRef<HTMLDivElement>(null);

	const { handleMouseDown, handleMouseMove, handleMouseUp } =
		useDesktopScroll(gridRef, "x");

	return (
		<div
			className="product-img__grid"
			ref={gridRef}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			{images.map((image, index) => (
				<ProductImgLrg key={index} src={image} alt={alt} />
			))}
		</div>
	);
};

export default ProductImgGrid;
