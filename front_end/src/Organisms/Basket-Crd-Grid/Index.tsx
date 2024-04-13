import { FC } from "react";
import BasketCrd, { Props as Product } from "../../Molecules/Crd-Basket/Index";
import "./Style.css";

interface Props {
	products: Array<Product>;
}

const BasketCrdGrid: FC<Props> = ({ products }) => {
	return (
		<div className="basket-crd__grid">
			{products.map((product, index) => (
				<BasketCrd
					key={index}
					src={product.src}
					title={product.title}
					category={product.category}
					quantity={product.quantity}
					option={product?.option}
				/>
			))}
		</div>
	);
};

export default BasketCrdGrid;
