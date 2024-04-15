import { FC } from "react";
import NavBar from "../../Organisms/Nav-Bar/Index";
import CollectionsGrid from "../../Organisms/Collections-Grid/Index";
import ProductGrid from "../../Organisms/Product-Grid/Index";
import { collectionJSON, productJSON } from "./Service";
import "./Style.css";

const Home: FC = () => {
	return (
		<main className="home-page">
			<NavBar left="Search" right="Basket" />
			<CollectionsGrid collections={collectionJSON} />
			<ProductGrid products={productJSON} />
		</main>
	);
};

export default Home;
