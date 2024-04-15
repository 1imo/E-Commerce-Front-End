import { FC, useEffect, useState } from "react";
import Heading from "../../Atoms/Headings";
import Text from "../../Atoms/Text";
import LabelSelect from "../Label-Select/Index";
import QuantitySelect from "../Quantity-Select/Index";
import { Basket, Product } from "../../Pages/Basket-Page/Service";
import "./Style.css";
import { product } from "../../Pages/Product-Page/Service";

interface ProductInterface {
	product: Product;
}

const BasketCrd: FC<ProductInterface> = ({ product }) => {
	const { id, heading, category, price, quantity, option } = product;
	const [quan, setQuantity] = useState<number>(quantity);

	const handleQuantityChange = (newQuantity: number) => {
		if (newQuantity > quan) {
			Basket.addItem({
				id: id,
				heading: heading,
				category: category,
				option: option,
				quantity: newQuantity - quan,
				price: price,
			});
		} else if (newQuantity < quan) {
			Basket.removeItem({
				id: id,
				heading: heading,
				category: category,
				option: option,
				quantity: quan - newQuantity,
				price: price,
			});
		}
		setQuantity(newQuantity);
	};

	return (
		<div className="basket-crd">
			<img
				className="basket-crd-grid__img"
				src={
					"https://images.squarespace-cdn.com/content/v1/5e8b3c8e75baa442b3ebb9f9/1625001623869-H8KWHGLFBWATK396I1XR/IMG_3419.JPG?format=750w"
				}
				alt={heading}
			/>
			<div className="basket-crd-grid__info">
				<div className="basket-crd-grid__info-text">
					<Heading
						type="Primary"
						size="three"
						text={heading}
						colour="--grey-one"
					/>
					<Text size="two" text={category} colour="--grey-two" />
					<Text size="one" text={`£${price}`} colour="--grey-two" />
				</div>
				<div className="basket-crd-grid__info-options">
					{option && <LabelSelect selected={true} text={option} />}
					<QuantitySelect
						quantity={quan}
						setQuanitity={handleQuantityChange}
						wrapper={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default BasketCrd;
