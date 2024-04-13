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

function App() {
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
			<LabelSelect text="Select a category" selected={false} />
		</section>
	);
}

export default App;
