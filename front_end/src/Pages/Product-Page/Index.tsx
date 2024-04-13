import { FC, useEffect, useState } from "react";
import NavBar from "../../Organisms/Nav-Bar/Index";
import ProductImgGrid from "../../Organisms/Product-Img-Grid/Index";
import Heading from "../../Atoms/Headings";
import Text from "../../Atoms/Text";
import LabelSelectGrid from "../../Organisms/Label-Select-Grid/Index";
import { product } from "./Service";
import ProductPgActions from "../../Organisms/Product-Pg-Actions/Index";
import "./Style.css";
import RecommendedProductGrid from "../../Organisms/Recommended-Product-Grid/Index";
import { productJSON } from "../Home-Page/Service";
import { Basket } from "../Basket-Page/Service";

const ProductPage: FC = () => {
	const options: string[] = product.options.map((option) =>
		option[0].toString()
	);

	const [categoryCallback, setCategoryCallback] = useState<string>(
		options[0]
	); // Selected category
	const [btnCallback, setBtnCallback] = useState<number>(0); // Selected quantity but only returns on button click

	useEffect(() => {
		if (btnCallback > 0) {
			Basket.addItem({
				id: product.id,
				heading: product.heading,
				option: categoryCallback,
				quantity: btnCallback,
				price: Number(
					product.options[
						options.findIndex(
							(option) => option === categoryCallback
						)
					][1]
				),
			});
		}
	}, [btnCallback]);

	return (
		<main className="product-page">
			<NavBar left="Back" />
			<ProductImgGrid images={product.images} alt={product.heading} />
			<div className="product-page__main-content">
				<Heading
					type="Primary"
					size="two"
					text={product.heading}
					colour="--grey-one"
				/>
				<Heading
					type="Secondary"
					size="two"
					text={product.category}
					colour="--grey-two"
				/>
			</div>
			<LabelSelectGrid
				selected={categoryCallback}
				options={options}
				callback={setCategoryCallback}
			/>
			<div className="product-page__description">
				<Text
					size="two"
					text={product.description}
					colour="--grey-one"
				/>
			</div>
			<ProductPgActions
				price={Number(
					product.options[
						options.findIndex(
							(option) => option === categoryCallback
						)
					][1]
				)}
				callback={setBtnCallback}
			/>
			<RecommendedProductGrid products={productJSON} />
		</main>
	);
};

export default ProductPage;
