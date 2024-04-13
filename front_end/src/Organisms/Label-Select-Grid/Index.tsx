import { FC, useState } from "react";
import LabelSelect from "../../Molecules/Label-Select/Index";
import "./Style.css";

interface Props {
	options: Array<string>;
}

const LabelSelectGrid: FC<Props> = ({ options }) => {
	const [selected, setSelected] = useState<string>(options[0]);
	return (
		<div className="label-select-grid">
			{options.map(
				(option, index) => (
					console.log(option, selected, option == selected),
					(
						<LabelSelect
							key={index}
							selected={option == selected}
							text={option}
							select={setSelected}
						/>
					)
				)
			)}
		</div>
	);
};

export default LabelSelectGrid;
