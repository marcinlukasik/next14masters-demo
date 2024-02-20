import { type CollectionListItemFragmentFragment } from "@/gql/graphql";
import { CollectionListItem } from "@/ui/molecules/CollectionListItem";

export const CollectionList = ({
	collections,
}: {
	collections: CollectionListItemFragmentFragment[];
}) => {
	return (
		<ul className="mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8">
			{collections.map((collection) => (
				<CollectionListItem
					collection={collection}
					key={collection.id}
				/>
			))}
		</ul>
	);
};
