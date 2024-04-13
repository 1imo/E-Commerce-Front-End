import { FC } from "react";
import Text from "../../Atoms/Text";
import "./Index.css";

interface Props {
	text: string;
	output: (value: boolean) => void;
}

const BtnMain: FC<Props> = ({ text, output }) => {
	return (
		<button
			className="btn-main"
			aria-label="region"
			onClick={() => output(true)}
		>
			<Text size="two" text={text} colour="--grey-one" />
		</button>
	);
};

export default BtnMain;
