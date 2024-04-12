import { useState } from "react";
import Heading from "./Atoms/Headings";
import Icon from "./Atoms/Icons";
import Text from "./Atoms/Text";
import BtnIcon from "./Molecules/Btn-Icon/Btn-Icon";
import CrdCollections from "./Molecules/Crd-Collections/Crd-Collections";
import CrdProducts from "./Molecules/Crd-Products-Sml/Crd-Products";
import QuantitySelect from "./Molecules/Quantity-Select/Quantity-Select";

function App() {
	const [quanitity, setQuantity] = useState(0);
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
			<QuantitySelect
				wrapper={false}
				colour="--grey-three"
				quanitity={quanitity}
				setQuanitity={setQuantity}
			/>
		</section>
	);
}

export default App;
