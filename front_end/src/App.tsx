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

const json = [
	{
		id: "1",
		title: "Wireless Bluetooth Headphones",
		category: "Electronics",
	},
	{
		id: "2",
		title: "Stainless Steel Water Bottle",
		category: "Outdoor",
	},
	{
		id: "3",
		title: "Organic Cotton T-Shirt",
		category: "Apparel",
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
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				width: "100vw",
			}}
		>
			<ProductGrid products={json} />
		</section>
	);
}

export default App;
