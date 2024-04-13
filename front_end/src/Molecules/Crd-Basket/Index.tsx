import { FC, useEffect, useState } from "react";
import Heading from "../../Atoms/Headings";
import Text from "../../Atoms/Text";
import LabelSelect from "../Label-Select/Index";
import QuantitySelect from "../Quantity-Select/Index";
import "./Style.css";

export interface Props {
	title: string;
	category: string;
	src: string;
	quantity: number;
	option?: string;
}

const BasketCrd: FC<Props> = ({ title, category, src, quantity, option }) => {
	const [quan, setQuantity] = useState<number>(quantity);

	return (
		<div className="basket-crd">
			<img className="basket-crd-grid__img" src={src} alt={title} />
			<div className="basket-crd-grid__info">
				<div className="basket-crd-grid__info-text">
					<Heading
						type="Primary"
						size="three"
						text={title}
						colour="--grey-one"
					/>
					<Text size="two" text={category} colour="--grey-two" />
				</div>
				{option && <LabelSelect selected={true} text={option} />}
				<QuantitySelect
					quantity={quan}
					setQuanitity={setQuantity}
					wrapper={true}
				/>
			</div>
		</div>
	);
};

export default BasketCrd;
