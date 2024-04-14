import { FC, useRef } from "react";
import CrdProductsSml, {
	Props as Product,
} from "../../Molecules/Crd-Products-Sml/Index";
import "./Style.css";
import { useDesktopScroll } from "../../Styles/Globals";

interface Props {
	products: Array<Product>;
}

const RecommendedProductGrid: FC<Props> = ({ products }) => {
	const gridRef = useRef<HTMLDivElement>(null);

	const { handleMouseDown, handleMouseMove, handleMouseUp } =
		useDesktopScroll(gridRef, "x");

	return (
		<div
			className="recommended-grid"
			role="region"
			aria-label="products"
			ref={gridRef}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			{products.map((product, index) => (
				<CrdProductsSml
					key={index}
					width="fixed"
					imageSource={product.imageSource}
					title={product.title}
					category={product.category}
				/>
			))}
		</div>
	);
};

export default RecommendedProductGrid;
