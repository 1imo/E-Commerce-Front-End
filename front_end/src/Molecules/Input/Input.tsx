import { FC, useState } from "react";
import Icon from "../../Atoms/Icons";
import "./Input.css";
import Text from "../../Atoms/Text";

// Types
type Icon = "Search" | "User" | "Email" | "House" | "Pin" | "Map";

// Props
interface Props {
	type: Icon;
	placeholder: string;
	label?: string;
	required?: Boolean;
}

const Input: FC<Props> = ({ type, placeholder, label, required }) => {
	let icon;

	switch (type) {
		case "Search":
			icon = <Icon type="Search" colour="--grey-one" />;
			break;
		case "User":
			icon = <Icon type="User" colour="--grey-two" />;
			break;
		case "Email":
			icon = <Icon type="Email" colour="--grey-two" />;
			break;
		case "House":
			icon = <Icon type="House" colour="--grey-two" />;
			break;
		case "Pin":
			icon = <Icon type="Pin" colour="--grey-two" />;
			break;
		case "Map":
			icon = <Icon type="Map" colour="--grey-two" />;
			break;
	}

	return (
		<section className="input">
			{label ? (
				<div>
					{label ? (
						<Text
							size="two"
							text={String(label)}
							colour="--grey-one"
						/>
					) : null}
					{required ? (
						<Text size="two" colour="--red" text="*" />
					) : null}
				</div>
			) : null}

			<div
				className={`input__container ${
					type == "Search" ? "input__container--search" : ""
				}`}
				aria-label="region"
			>
				{icon}
				<input placeholder={placeholder} />
			</div>
		</section>
	);
};

export default Input;
