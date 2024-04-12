import Heading from "./Atoms/Headings";
import Icon from "./Atoms/Icons";
import Text from "./Atoms/Text";
import CrdCollections from "./Molecules/Crd-Collections/Crd-Collections";
import CrdProducts from "./Molecules/Crd-Products-Sml/Crd-Products";

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
			<CrdProducts
				width="fixed"
				imageSource="https://images.unsplash.com/photo-1572853566597-b83cde546912?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				title="Product"
				category="Category"
			/>
		</section>
	);
}

export default App;
