import { createElement, FC } from "react";

// Types
type HeadingType = "Primary" | "Secondary";
type HeadingSize = "one" | "two" | "three";
type HeadingColour =
	| "--grey-one"
	| "--grey-two"
	| "--grey-three"
	| "--grey-four"
	| "--white"
	| "--red";

// Props
interface Props {
	type: HeadingType;
	size: HeadingSize;
	text: string;
	colour?: HeadingColour;
}

// Returns a heading element
// A secondary heading is smaller than a primary heading by step of one
// Defaults to --grey-one
const Heading: FC<Props> = ({ type, size, text, colour = "--grey-one" }) => {
	let HeadingElement;
	if (type === "Primary") {
		if (size === "one") {
			HeadingElement = "h1";
		} else if (size === "two") {
			HeadingElement = "h2";
		} else {
			HeadingElement = "h3";
		}
	} else {
		if (size === "one") {
			HeadingElement = "h2";
		} else {
			HeadingElement = "h3";
		}
	}

	return createElement(
		HeadingElement,
		{ style: { color: `var(${colour})` } },
		text
	);
};

export default Heading;
