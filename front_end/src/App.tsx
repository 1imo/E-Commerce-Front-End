import { useEffect, useState } from "react";
import Heading from "./Atoms/Headings";
import Icon from "./Atoms/Icons";
import Text from "./Atoms/Text";
import BtnIcon from "./Molecules/Btn-Icon/Btn-Icon";
import CrdCollections from "./Molecules/Crd-Collections/Crd-Collections";
import CrdProducts from "./Molecules/Crd-Products-Sml/Crd-Products";
import QuantitySelect from "./Molecules/Quantity-Select/Quantity-Select";
import Input from "./Molecules/Input/Input";
import LabelSelect from "./Molecules/Label-Select/Label-Select";
import BtnMain from "./Molecules/Btn-Main/Btn-Main";
import ProductImgLrg from "./Molecules/Product-Img-Lrg/Product-Img-Lrg";
import NavBar from "./Organisms/Nav-Bar/Nav-Bar";
import ProductPgActions from "./Organisms/Product-Pg-Actions/Product-Pg-Actions";

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
			<ProductPgActions price={10} count={setCount} />
		</section>
	);
}

export default App;
