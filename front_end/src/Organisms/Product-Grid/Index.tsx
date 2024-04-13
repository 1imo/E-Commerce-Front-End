import { FC } from "react";
import CrdProductsSml, {
	Props as Product,
} from "../../Molecules/Crd-Products-Sml/Index";
import "./Style.css";

interface Props {
	products: Array<Product>;
}

const ProductGrid: FC<Props> = ({ products }) => {
	return (
		<div className="product-grid" role="region" aria-label="products">
			{products.map((product, index) => (
				<CrdProductsSml
					key={index}
					width="fluid"
					imageSource={product.imageSource}
					title={product.title}
					category={product.category}
				/>
			))}
		</div>
	);
};

export default ProductGrid;
