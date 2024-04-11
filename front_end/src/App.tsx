import Heading from "./Atoms/Headings";
import Icon from "./Atoms/Icons";
import Text from "./Atoms/Text";

function App() {
	return (
		<>
			<Heading
				type="Primary"
				size="one"
				text="Heading"
				color="--grey-one"
			/>
			<Text size="two" text="Text" color="--grey-two" />
			<Icon type="User" colour="--grey-one" />
		</>
	);
}

export default App;
