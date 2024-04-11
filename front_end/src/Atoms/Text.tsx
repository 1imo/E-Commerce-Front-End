import { FC, createElement } from "react";

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
interface TextProps {
	size: TextSize;
	text: string;
	color?: TextColour;
}

// Returns a p tag
// Default colour of --grey-two
const Text: FC<TextProps> = ({ size, text, color = "--grey-two" }) => {
	let classname;
	if (size === "one") {
		classname = "body-text-large";
	} else {
		classname = "body-text-small";
	}

	return (
		<p className={classname} style={{ color: `var(${color})` }}>
			{text}
		</p>
	);
};

export default Text;
