import { FC } from "react";
import Heading from "../../Atoms/Headings";
import "./Style.css";
import LinkNotif from "../Link-Notif/Index";

type Width = "fixed" | "fluid";

export interface Props {
	width?: Width;
	imageSource: string;
	title: string;
	category: string;
}

// Small product card
// Fixed or auto widths based on the parent container
const CrdProductsSml: FC<Props> = ({
	width = "fluid",
	imageSource,
	title,
	category,
}) => {
	return (
		<div
			className={`crd-products crd-products--${width}`}
			tabIndex={0}
			role="region"
			aria-label={`Product: ${title}`}
		>
			<div className="crd-products__image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="crd-products__link-icon">
				<LinkNotif />
			</div>
			<div className="crd-products__content">
				<Heading
					type="Primary"
					size="three"
					text={title}
					colour="--grey-one"
				/>
				<Heading
					type="Secondary"
					size="three"
					text={category}
					colour="--grey-two"
				/>
			</div>
		</div>
	);
};

export default CrdProductsSml;
