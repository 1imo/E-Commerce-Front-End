import { FC } from "react";
import NavBar from "../../Organisms/Nav-Bar/Index";
import { Basket } from "./Service";
import BasketCrdGrid from "../../Organisms/Basket-Crd-Grid/Index";

const BasketPage: FC = () => {
	console.log(Basket.getItems());
	return (
		<main>
			<NavBar left="Back" />
			<BasketCrdGrid products={Basket.getItems()} />
		</main>
	);
};

export default BasketPage;
