import { FC } from "react";

// Types
type TextSize = "one" | "two";
type TextColour =
	| "--grey-one"
	| "--grey-two"
	| "--grey-three"
	| "--grey-four"
	| "--white"
	| "--red";

// Props
interface Props {
	size: TextSize;
	text: string;
	colour?: TextColour;
}

// Returns a p tag
// Default colour of --grey-two
const Text: FC<Props> = ({ size, text, colour = "--grey-two" }) => {
	let classname;
	if (size === "one") {
		classname = "body-text-large";
	} else {
		classname = "body-text-small";
	}

	return (
		<p className={classname} style={{ color: `var(${colour})` }}>
			{text}
		</p>
	);
};

export default Text;
