import Heading from "./Atoms/Headings";
import Icon from "./Atoms/Icons";
import Text from "./Atoms/Text";
import CrdCollections from "./Molecules/Crd-Collections/Crd-Collections";

function App() {
	return (
		<section
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<CrdCollections
				title="New 2am Collection"
				subTitle="Our most-loved"
				imagePath="https://images.unsplash.com/photo-1572853566597-b83cde546912?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
		</section>
	);
}

export default App;
