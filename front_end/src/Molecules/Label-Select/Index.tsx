import { FC } from "react";
import "./Index.css";
import Text from "../../Atoms/Text";

type Selected = true | false;

interface Props {
	selected: Selected;
	text: string;
}

const LabelSelect: FC<Props> = ({ selected, text }) => {
	return (
		<div
			className={`label-select ${
				selected ? "label-select--selected" : ""
			}`}
			aria-label="region"
			tabIndex={0}
		>
			<Text
				size="two"
				text={text}
				colour={selected ? "--grey-one" : "--grey-two"}
			/>
		</div>
	);
};

export default LabelSelect;
