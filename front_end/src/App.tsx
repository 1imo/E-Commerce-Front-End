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

const json = [
	{
		title: "Summer Essentials",
		subTitle: "Beach-Ready Fashion",
	},
	{
		title: "Tech Gadgets",
		subTitle: "Latest Innovations",
	},
	{
		title: "Home Decor",
		subTitle: "Cozy and Chic",
	},
	{
		title: "Outdoor Gear",
		subTitle: "Adventure Awaits",
	},
	{
		title: "Kids' Toys",
		subTitle: "Fun and Educational",
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
			<CollectionsGrid collections={json} />
		</section>
	);
}

export default App;
