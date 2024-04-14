import { FC } from "react";
import BasketCrd from "../../Molecules/Crd-Basket/Index";
import { Product } from "../../Pages/Basket-Page/Service";
import "./Style.css";

interface Props {
	products: Array<Product>;
}

const BasketCrdGrid: FC<Props> = ({ products }) => {
	return (
		<div className="basket-crd__grid">
			{products.map((product, index) => (
				<BasketCrd key={index} product={product} />
			))}
		</div>
	);
};

export default BasketCrdGrid;
