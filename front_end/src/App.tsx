import { useEffect, useState } from "react";
import Heading from "./Atoms/Headings";
import Icon from "./Atoms/Icons";
import Text from "./Atoms/Text";
import BtnIcon from "./Molecules/Btn-Icon/Index";
import CrdCollections from "./Molecules/Crd-Collections/Index";
import CrdProducts from "./Molecules/Crd-Products-Sml/Index";
import QuantitySelect from "./Molecules/Quantity-Select/Index";
import Input from "./Molecules/Input/Index";
import LabelSelect from "./Molecules/Label-Select/Index";
import BtnMain from "./Molecules/Btn-Main/Index";
import ProductImgLrg from "./Molecules/Product-Img-Lrg/Index";
import NavBar from "./Organisms/Nav-Bar/Index";
import ProductPgActions from "./Organisms/Product-Pg-Actions/Index";
import ProductGrid from "./Organisms/Product-Grid/Index";
import CollectionsGrid from "./Organisms/Collections-Grid/Index";
import ProductImgGrid from "./Organisms/Product-Img-Grid/Index";
import LabelSelectGrid from "./Organisms/Label-Select-Grid/Index";
import BasketCrd from "./Molecules/Crd-Basket/Index";
import BasketCrdGrid from "./Organisms/Basket-Crd-Grid/Index";

const json = [
	{
		title: "Example Product",
		category: "Items",
		src: "https://images.unsplash.com/photo-1572853566597-b83cde546912?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		quantity: 5,
		option: "Small",
	},
	{
		title: "Example Product",
		category: "Items",
		src: "https://images.unsplash.com/photo-1572853566597-b83cde546912?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		quantity: 5,
		option: "Small",
	},
	{
		title: "Example Product",
		category: "Items",
		src: "https://images.unsplash.com/photo-1572853566597-b83cde546912?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		quantity: 5,
		option: "Small",
	},
	{
		title: "Example Product",
		category: "Items",
		src: "https://images.unsplash.com/photo-1572853566597-b83cde546912?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		quantity: 5,
		option: "Small",
	},
	{
		title: "Example Product",
		category: "Items",
		src: "https://images.unsplash.com/photo-1572853566597-b83cde546912?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		quantity: 5,
		option: "Small",
	},
];

function App() {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		console.log(count);
	}, [count]);
	return (
		<section
			style={{
				display: "flex",
				// alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				width: "100vw",
			}}
		>
			<BasketCrdGrid products={json} />
		</section>
	);
}

export default App;
