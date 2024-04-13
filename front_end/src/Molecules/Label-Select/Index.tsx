import { FC } from "react";
import "./Style.css";
import Text from "../../Atoms/Text";

type Selected = true | false;

interface Props {
	selected: Selected;
	text: string;
	select?: (value: string) => void;
}

const LabelSelect: FC<Props> = ({ selected, text, select }) => {
	return (
		<div
			className={`label-select ${
				selected && !select ? "label-select--selected" : ""
			}`}
			aria-label="region"
			tabIndex={0}
			onClick={() => select && select(text)}
		>
			<Text
				size="two"
				text={text}
				colour={selected && select ? "--grey-one" : "--grey-two"}
			/>
		</div>
	);
};

export default LabelSelect;
