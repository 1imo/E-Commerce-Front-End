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
interface HeadingProps {
	type: HeadingType;
	size: HeadingSize;
	text: string;
	color?: HeadingColour;
}

// Returns a heading element
// A secondary heading is smaller than a primary heading by step of one
// Defaults to --grey-one
const Heading: FC<HeadingProps> = ({
	type,
	size,
	text,
	color = "--grey-one",
}) => {
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
		} else if (size === "two") {
			HeadingElement = "h3";
		} else {
			HeadingElement = "h3";
		}
	}

	return createElement(
		HeadingElement,
		{ style: { color: `var(${color})` } },
		text
	);
};

export default Heading;
