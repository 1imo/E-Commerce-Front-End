import { FC } from "react";
import CrdProductsSml from "../../Molecules/Crd-Products-Sml/Index";
import "./Index.css";

interface Product {
	id: string;
	title: string;
	category: string;
}

interface Props {
	products: Array<Product>;
}

const ProductGrid: FC<Props> = ({ products }) => {
	return (
		<div className="product-grid" role="region" aria-label="products">
			{products.map((product, index) => (
				/* <div key={product.id} className="product-grid__product">
					{product.title}
				</div> */
				<CrdProductsSml
					key={index}
					width="fluid"
					imageSource="https://images.unsplash.com/photo-1572853566597-b83cde546912?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					title={product.title}
					category={product.category}
				/>
			))}
		</div>
	);
};

export default ProductGrid;
