import { FC } from "react";
import Icon from "../../Atoms/Icons";
import "./Btn-Icon.css";

// Types
type Icon = "Basket" | "Back";
type Colour =
	| "--grey-one"
	| "--grey-two"
	| "--grey-three"
	| "--grey-four"
	| "--white"
	| "--red";

// Props
interface Props {
	type: Icon;
	colour?: Colour;
}

const BtnIcon: FC<Props> = ({ type, colour = "--grey-one" }) => {
	let icon;

	if (type == "Basket") {
		icon = <Icon type="Basket" colour={colour} />;
	} else {
		icon = <Icon type="Back" colour={colour} />;
	}

	return <button className="btn-icon">{icon}</button>;
};

export default BtnIcon;
