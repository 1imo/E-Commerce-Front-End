import { FC, useEffect, useState } from "react";
import NavBar from "../../Organisms/Nav-Bar/Index";
import { Basket } from "./Service";
import BasketCrdGrid from "../../Organisms/Basket-Crd-Grid/Index";
import "./Style.css";
import BasketPgActions from "../../Organisms/Basket-Pg-Actions/Index";

const BasketPage: FC = () => {
	const [callback, setCallback] = useState<number>(0);
	const [price, setPrice] = useState<number>(Basket.getTotal());

	useEffect(() => {
		const handleBasketChange = () => {
			setPrice(Basket.getTotal());
		};

		Basket.on(handleBasketChange);

		return () => {
			Basket.off(handleBasketChange);
		};
	}, []);

	return (
		<main className="basket-page">
			<NavBar left="Back" />
			<BasketCrdGrid products={Basket.getItems()} />
			<BasketPgActions price={price} callback={setCallback} />
		</main>
	);
};

export default BasketPage;
