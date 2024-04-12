import { FC } from "react";
import "./Crd-Collections.css";
import Heading from "../../Atoms/Headings";
import LinkNotif from "../Link-Notif/Link-Notif";
// This is a card for displaying collections
// Not for displaying a collection of cards
// See organisms for that

interface Props {
	title: string;
	subTitle: string;
	imagePath: string;
}

const CrdCollections: FC<Props> = ({ title, subTitle, imagePath }) => {
	return (
		<div
			className="crd-collections"
			tabIndex={0}
			role="region"
			aria-label={`Collection: ${title}`}
		>
			<img
				className="crd-collections__image"
				src={imagePath}
				alt={title}
			/>
			<LinkNotif />
			<div className="crd-collections__content">
				<Heading
					type="Primary"
					size="two"
					text={title}
					colour="--white"
				/>
				<Heading
					type="Secondary"
					size="two"
					text={subTitle}
					colour="--white"
				/>
			</div>
		</div>
	);
};

export default CrdCollections;
