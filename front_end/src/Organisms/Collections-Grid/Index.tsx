import { FC } from "react";
import CrdCollections, {
	Props as Collection,
} from "../../Molecules/Crd-Collections/Index";
import "./Style.css";
interface Props {
	collections: Array<Collection>;
}

const CollectionsGrid: FC<Props> = ({ collections }) => {
	return (
		<div
			className="collections-grid"
			role="region"
			aria-label="collections"
		>
			{collections.map((collection) => (
				<CrdCollections
					key={collection.title}
					title={collection.title}
					subTitle={collection.subTitle}
					imagePath={collection.imagePath}
				/>
			))}
		</div>
	);
};

export default CollectionsGrid;
