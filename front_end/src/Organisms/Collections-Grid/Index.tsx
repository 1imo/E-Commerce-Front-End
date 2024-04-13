import { FC } from "react";
import CrdCollections from "../../Molecules/Crd-Collections/Index";
import "./Style.css";

interface Collection {
	title: string;
	subTitle: string;
	imagePath?: string;
}

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
					imagePath="https://images.unsplash.com/photo-1572853566597-b83cde546912?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				/>
			))}
		</div>
	);
};

export default CollectionsGrid;
